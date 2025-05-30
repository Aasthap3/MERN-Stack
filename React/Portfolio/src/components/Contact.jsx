import React, { useState } from "react";

const Contact = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Comment: ", comment);

    setComment({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div
        id="contact"
        className="m-4 p-5 rounded bg-light h-75 d-flex flex-column justify-content-center"
      >
        <h2 className="text-bg-dark p-2 rounded">Contact</h2>
        <div className="cont-out d-flex justify-content-center bg-light rounded-4 h-75 m-5 p-5">
          <form className="d-flex flex-column gap-2 p-2" onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={comment.name}
              className=" form-control"
              onChange={handleChange}
            />

            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={comment.email}
              className=" form-control"
              onChange={handleChange}
            />

            <label>Message: </label>
            <input
              type="text"
              name="message"
              value={comment.message}
              className=" form-control"
              onChange={handleChange}
            />

            <button className="btn btn-outline-dark mt-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
