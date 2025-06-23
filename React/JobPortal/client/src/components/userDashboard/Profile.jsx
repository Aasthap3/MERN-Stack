import React from "react";
import photo from "../../assets/profile.jpg";

const Profile = () => {
  return (
    <>
      <div className="m-5">
        <h1 className="font-mulish text-lg">My Profile</h1>
        <div className="bg-white rounded-lg my-5">
          <div className="details p-5 flex">
            <div className="bg-gray-200 w-20 h-20 flex items-center justify-center rounded-full text-3xl">
              A
            </div>
            <div className="flex flex-col h-20 px-5 justify-center">
              <span className="font-medium text-lg">Aastha Porwal</span>
              <span className="text-gray-500">Frontend Developer</span>
            </div>
          </div>
          <div className="info p-5 flex">
            <div className="grid w-1/2">
              <span className="font-bold">Contact Information</span>
              <span className="text-md text-gray-500">
                Email: porwalaastha@gmail.com
              </span>
              <span className="text-md text-gray-500">Phone: 9876543210</span>
            </div>
            <div className="grid w-1/2 h-fit">
              <span className="font-bold">Location</span>
              <span className="text-md text-gray-500">
                San Francisco, CA
              </span> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
