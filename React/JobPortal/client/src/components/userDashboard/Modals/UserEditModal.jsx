import React, { useState } from "react";
import { SlClose } from "react-icons/sl";
import { FaCamera } from "react-icons/fa";

const UserEditModal = ({isOpen, isClose}) => {
  if (!isOpen) return null;

  const [preview, setPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    console.log(file);
    setPreview(file);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 p-30">
        <div className="h-[80vh] w-full max-w-4xl mx-auto border bg-white rounded-xl overflow-y-auto scrollbar-hide">
          <div className="flex justify-between py-5 px-10 sticky top-0 bg-pink-500">
            <h1 className="text-2xl text-white font-bold">Edit Profile</h1>
            <button onClick={isClose}>
              <SlClose className="text-2xl text-red-500" />
            </button>
          </div>
          <div className="p-7">
            <div className="relative w-50">
              <div className="border h-50 w-50 rounded-full overflow-hidden">
                <img
                  src={preview || "https://placehold.co/600x400?text=H"}
                  alt=""
                  className="h-50 w-50 object-cover"
                />
              </div>
              <label className="absolute bottom-2 right-1 rounded-full p-2 bg-pink-500">
                <FaCamera className="text-2xl text-white"/>
                <input type="file" className="hidden" onChange={handlePhotoChange} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditModal;
