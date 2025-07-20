import ContactMessage from "../models/contactMessage.js";
import Job from "../models/jobModel.js";
import sendEmail from "../utils/emailService.js";

export const getAllJobs = async (req, res, next) => {
  try {
    const Jobs = await Job.find();
    res.status(200).json({ message: "All Jobs Fetched", data: Jobs });
  } catch (error) {
    next(error);
  }
};

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, formMessage } = req.body;

    if (!name || !email || !subject || !formMessage) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      formMessage,
    });

    //constructing email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${formMessage}</p>
    `;

    let emailSent = false;

    let adminEmails = [];
    if (process.env.ADMIN_EMAIL) {
      adminEmails = process.env.ADMIN_EMAIL.split(",").map((email) => email.trim());
    }

    adminEmails.forEach(async (element) => {
      const result = await sendEmail(
        element,
        `New Contact Form: ${subject}`,
        emailContent
      );
      if (result) {
        emailSent = true;
      }
    });

    res
      .status(200)
      .json({ message: "Contact Form Submitted Successfully!", emailSent: emailSent });
  } catch (error) {
    next(error);
  }
};
