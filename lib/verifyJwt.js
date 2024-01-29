import jwt from "jsonwebtoken";

export default function verifyJwt(token) {
  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);

    if (decoded.exp * 1000 < Date.now()) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}
