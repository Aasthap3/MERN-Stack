import jwt from "jsonwebtoken";

export const genAuthToken = (userID, res) => {
    const token = jwt.sign({id: userID}, process.env.JWT_SECRET,{
        expiresIn: "1d",
    });

    res.cookie("secret",token,{
        maxAge: 1000*60*60*24,
        httpOnly: true,
        sameSite: "strict",
        secure: false,
    });
};