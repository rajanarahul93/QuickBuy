import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Log headers to debug
    console.log("Incoming headers:", req.headers);

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized: Invalid credentials" });
    }

    // If valid
    next();
  } catch (error) {
    console.log("Auth Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Auth failed: " + error.message });
  }
};

export default adminAuth;