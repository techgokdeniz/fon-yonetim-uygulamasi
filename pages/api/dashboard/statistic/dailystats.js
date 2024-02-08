import ResponseGenerator from "@/lib/ResponseGenerator";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const dailyIncreaseInvestors = await prisma.funds.findMany({
        where: {
          type: "TEFAS",
        },
        orderBy: {
          yatirimciDegisimi: "desc",
        },
        select: {
          fundCode: true,
          name: true,
          yatirimciDegisimi: true,
        },
        take: 5,
      });

      dailyIncreaseInvestors.forEach((fund) => {
        if (fund.yatirimciDegisimi > 0) {
          fund.yatirimciDegisimi = "+" + fund.yatirimciDegisimi;
        }
      });

      const dailyTopWinner = await prisma.funds.findMany({
        where: {
          type: "TEFAS",
          yatirimciSayisi: {
            gte: 500,
          },
        },
        orderBy: {
          gunlukGetiri: "desc",
        },
        select: {
          fundCode: true,
          name: true,
          gunlukGetiri: true,
        },
        take: 5,
      });

      dailyTopWinner.forEach((fund) => {
        if (fund.gunlukGetiri > 0) {
          fund.gunlukGetiri = "%" + fund.gunlukGetiri;
        }
      });

      const dailyTopLost = await prisma.funds.findMany({
        where: {
          type: "TEFAS",
          yatirimciSayisi: {
            gte: 100,
          },
        },
        orderBy: {
          gunlukGetiri: "asc",
        },
        select: {
          fundCode: true,
          name: true,
          gunlukGetiri: true,
        },
        take: 5,
      });

      dailyTopLost.forEach((fund) => {
        fund.gunlukGetiri = "%" + fund.gunlukGetiri;
      });

      const dailyMostInvestors = await prisma.funds.findMany({
        where: {
          type: "TEFAS",
        },
        orderBy: {
          yatirimciSayisi: "desc",
        },
        select: {
          fundCode: true,
          name: true,
          yatirimciSayisi: true,
        },
        take: 5,
      });

      let data = [
        {
          caption: "Günün En Çok Yatırımcısı Artan Fonları",
          data: dailyIncreaseInvestors,
          header: ["Fon Kodu", "Fon Adı", "Yatırımcı Değişimi"],
        },
        {
          caption: "Günün En Çok Kazandıran Fonları",
          data: dailyTopWinner,
          header: ["Fon Kodu", "Fon Adı", "Günlük Getiri"],
        },
        {
          caption: "Günün En Çok Kaybettiren Fonları",
          data: dailyTopLost,
          header: ["Fon Kodu", "Fon Adı", "Günlük Getiri"],
        },
        {
          caption: "En Çok Yatırımcısı Olan Fonlar",
          data: dailyMostInvestors,
          header: ["Fon Kodu", "Fon Adı", "Yatırımcı Sayısı"],
        },
      ];

      return ResponseGenerator(
        res,
        200,
        false,
        data,
        "Haftalik veriler getirildi."
      );
    } catch (err) {
      return ResponseGenerator(res, 500, true, {}, "Serverda bir hata olustu");
    }
  } else {
    return ResponseGenerator(res, 400, true, {}, "Method desteklenmiyor.");
  }
}
