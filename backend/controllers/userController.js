import userModel from "../models/userModel.js";
import vadilator from "validator";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

//For generating token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      res.json({ success: false, message: "User doesn't exist" });
    }
    const isMatch = await bycrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Incorrect credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking already user exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //vadilating email format & strong password
    if (!vadilator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid Email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be atleast 8 characters  long",
      });
    }

    //hashing user password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Route for admin login
const adminLogin = async (req, res) => {
   try {
    const {email,password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ){
      const token = createToken(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})
    }else{
      res.json({success:false,message:"Invalid credentials"})
    }
   } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
   }
};

export { loginUser, registerUser, adminLogin };

