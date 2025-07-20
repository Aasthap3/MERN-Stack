import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, mailBody) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSCODE
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to,
            subject,
            html: mailBody
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }       
};

export default sendEmail;
