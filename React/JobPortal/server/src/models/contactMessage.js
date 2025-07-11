import mongoose from "mongoose";

const contactMessageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    formMessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;
