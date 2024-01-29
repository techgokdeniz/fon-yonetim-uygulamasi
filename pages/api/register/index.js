import prisma from "../../../lib/prismadb";
import bcrypt from "bcrypt";
import ResponseGenerator from "@/lib/ResponseGenerator";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Hello World!" });
  } else {
    const { name, email, password, surname } = req.body;

    if (!name || !email || !password || !surname) {
      return ResponseGenerator(
        res,
        400,
        true,
        {},
        "Lütfen tüm alanları doldurunuz."
      );
    }

    const exist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exist) {
      return ResponseGenerator(
        res,
        400,
        true,
        {},
        "Bu email adresi ile daha önce kayıt olunmuş."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        surname,
        email,
        hashedPassword,
      },
    });

    return ResponseGenerator(res, 200, false, user, "Kayıt başarılı.");
  }
}
