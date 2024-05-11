import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(400).json({ message: "All the fields are required" });
  }

  //hasing password
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashPassword, email });

  try {
    await newUser.save();
    res.json({ message: "Signup successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
