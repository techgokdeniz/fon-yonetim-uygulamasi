import prisma from "../../../lib/prismadb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Hello World!" });
  } else {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return res.json(user);
  }
}
