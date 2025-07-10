import { v2 as cloudinary } from "cloudinary";

let isConfigured = false;

const configCloudinary = () => {
  if (!isConfigured) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    isConfigured = true;
  }
  
  return cloudinary;
};

export default () => {
  return configCloudinary();
};
