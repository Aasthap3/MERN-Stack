import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import UserEditModal from "./Modals/UserEditModal";

const Profile = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem("user")));

  return (
    <>
      <div className="m-5">
        <div className="flex justify-between">
          <h1 className="font-mulish text-lg">My Profile</h1>
          <button
            type="submit"
            className="border border-pink-500 text-pink-500 py-2 px-4 hover:bg-pink-500 hover:text-white flex"
            onClick={() => setEditModalOpen(true)}
          >
            <MdOutlineModeEdit className="w-5 h-5" />
            Edit Profile
          </button>
        </div>
        <div className="bg-white rounded-lg my-5">
          <div className="details p-5 flex">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={data.photo || "https://via.placeholder.com/150"}
                className=" w-full h-full object-cover"
                alt="User Avatar"
              />
            </div>
            <div className="flex flex-col h-20 px-5 justify-center">
              <span className="font-medium text-lg">
                {data.firstName} {data.lastName}
              </span>
              <span className="text-gray-500">Frontend Developer</span>
            </div>
          </div>
          <div className="info p-5 flex">
            <div className="grid w-1/2">
              <span className="font-bold">Contact Information</span>
              <span className="text-md text-gray-500">Email: {data.email}</span>
              <span className="text-md text-gray-500">Phone: {data.phone}</span>
            </div>
            <div className="grid w-1/2 h-fit">
              <span className="font-bold">Location</span>
              <span className="text-md text-gray-500">{data.address}</span>
            </div>
          </div>
        </div>
      </div>
      <UserEditModal
        isOpen={isEditModalOpen}
        isClose={() => setEditModalOpen(false)}
      />
    </>
  );
};

export default Profile;
