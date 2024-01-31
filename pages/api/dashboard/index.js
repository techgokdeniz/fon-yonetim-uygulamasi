import ResponseGenerator from "@/lib/ResponseGenerator";
import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      let countFunds = await prisma.funds.count();

      return ResponseGenerator(
        res,
        200,
        false,
        countFunds,
        "Toplam Veritabaninda Bulunan Fon Sayisi"
      );
    } catch (err) {
      return ResponseGenerator(res, 500, true, {}, "Serverda bir hata olustu");
    }
  } else {
    return ResponseGenerator(
      res,
      400,
      true,
      {},
      "Method desteklenmiyor."
    );
  }
}
