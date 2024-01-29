import ResponseGenerator from "@/lib/ResponseGenerator";
import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const start = parseInt(req.query.start) || 0;
      const length = parseInt(req.query.length) || 10;

      const funds = await prisma.funds.findMany({
        select: {
          name: true,
          fundCode: true,
        },
        skip: start,
        take: length,
      });

      return ResponseGenerator(
        res,
        200,
        false,
        funds,
        "Fonlar Basariyla Getirildi."
      );
    } catch (err) {
      return ResponseGenerator(
        res,
        500,
        true,
        err.message,
        "Serverda bir hata olustu"
      );
    }
  } else {
    return ResponseGenerator(res, 400, true, {}, "Method desteklenmiyor.");
  }
}
