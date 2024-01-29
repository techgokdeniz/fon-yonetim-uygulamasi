import prisma from "../../../lib/prismadb";
import bcrypt from "bcrypt";
import ResponseGenerator from "@/lib/ResponseGenerator";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return ResponseGenerator(res, 200, false, {}, "Hello World!");
  } else {
    const { email, password } = req.body;

    if (!email || !password) {
      return ResponseGenerator(
        res,
        400,
        true,
        {},
        "Lütfen tüm alanları doldurunuz."
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !user?.hashedPassword) {
      return ResponseGenerator(
        res,
        400,
        true,
        {},
        "Bu email adresi ile daha önce kayıt olunmuş."
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
      return ResponseGenerator(res, 400, true, {}, "Şifre hatalı.");
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    return ResponseGenerator(res, 200, false, token, "Giriş başarılı.");
  }
}
