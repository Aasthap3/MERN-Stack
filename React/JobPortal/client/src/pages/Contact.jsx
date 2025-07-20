import React, { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import axios from "../config/api";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    formMessage: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value }); //prev thing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await axios.post("/public/contactForm", contactData);
      toast.success(res.data.message,
        `{res.data.emailSent ? "Email Sent Successfully" : "Email Sending Failed"}`
      );
      setSubmitted(true);
      setContactData({
        name: "",
        email: "",
        subject: "",
        formMessage: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className='bg-[rgba(78,87,158,0.8)] bg-[url("../about.jpg")] bg-center bg-blend-multiply px-90 h-[60vh] flex justify-center items-center'>
        <h1 className="font-mulish text-5xl  text-white">CONTACT US</h1>
      </div>
      <div className="flex my-50 justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.288552095168!2d77.45734829999999!3d23.268962699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6967f58e0dbf%3A0x65d0724cf8368e2d!2sRICR%20-%20Raj%20Institute%20of%20Coding%20%26%20Robotics%20%7C%20Best%20Java%20Coding%20Classes%20In%20Bhopal!5e0!3m2!1sen!2sin!4v1750766595419!5m2!1sen!2sin"
          width="1200"
          height="500"
          className="border-2"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex gap-10 w-full mx-40">
        <div className="row-container w-1/2">
          <h2 className="text-3xl">Get In Touch</h2>
          <form className="grid my-10 gap-6" onSubmit={handleSubmit}>
            <textarea
              rows={10}
              placeholder="Enter message"
              name="formMessage"
              value={contactData.formMessage}
              onChange={handleChange}
              className="border border-gray-300 p-3 text-gray-700 text-sm"
            />
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                className="border border-gray-300 p-3 text-gray-700 text-sm w-1/2"
              />
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 text-gray-700 text-sm w-1/2"
              />
            </div>
            <input
              type="text"
              placeholder="Enter subject"
              name="subject"
              value={contactData.subject}
              onChange={handleChange}
              className="border border-gray-300 p-3 text-gray-700 text-sm"
            />
            <div>
              <button
                type="submit"
                className="border border-pink-500 text-pink-500 py-4 px-8 hover:bg-pink-500 hover:text-white"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className="row-container grid gap-10 px-20 h-fit my-20">
          <div className="flex h-fit gap-1">
            <div className="">
              <RiHome2Line className="w-10 h-10 text-gray-400" />
            </div>
            <div className="grid">
              <span>Buttonwood, California.</span>
              <span className="text-gray-500">Rosemead, CA 91770</span>
            </div>
          </div>
          <div className="flex h-fit gap-1">
            <div className="flex">
              <MdOutlinePhoneIphone className="w-10 h-10 text-gray-400" />
            </div>
            <div className="grid">
              <span>+1 253 565 2365</span>
              <span className="text-gray-500">Mon to Fri 9am to 6pm</span>
            </div>
          </div>
          <div className="flex h-fit gap-1">
            <div className="">
              <FiMail className="w-10 h-10 text-gray-400" />
            </div>
            <div className="grid">
              <span>support@colorlib.com</span>
              <span className="text-gray-500">Send us your query anytime!</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
