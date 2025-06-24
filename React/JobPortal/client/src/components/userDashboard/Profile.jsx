import React, { useState } from "react";
import photo from "../../assets/profile.jpg";

const Profile = () => {
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem("user")));

  return (
    <>
      <div className="m-5">
        <h1 className="font-mulish text-lg">My Profile</h1>
        <div className="bg-white rounded-lg my-5">
          <div className="details p-5 flex">
            <div>
              <img src={data.photo} className="w-20 h-20 rounded-full object-cover" alt="" />
            </div>
            <div className="flex flex-col h-20 px-5 justify-center">
              <span className="font-medium text-lg">{data.firstName} {data.lastName}</span>
              <span className="text-gray-500">Frontend Developer</span>
            </div>
          </div>
          <div className="info p-5 flex">
            <div className="grid w-1/2">
              <span className="font-bold">Contact Information</span>
              <span className="text-md text-gray-500">
                Email: {data.email}
              </span>
              <span className="text-md text-gray-500">Phone: {data.phone}</span>
            </div>
            <div className="grid w-1/2 h-fit">
              <span className="font-bold">Location</span>
              <span className="text-md text-gray-500">{data.address}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
