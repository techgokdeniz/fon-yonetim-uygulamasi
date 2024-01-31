import ResponseGenerator from "@/lib/ResponseGenerator";
import baseTefasFetch from "@/hooks/baseFetch";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { data, error } = await baseTefasFetch(
        "/DB/getAllMainCharts",
        "dil=TR"
      );

      if(error){
        throw new Error(error)
      }

      let HaftalikVeriler = data[data.length - 10].Table;

      return ResponseGenerator(
        res,
        200,
        false,
        HaftalikVeriler,
        "Haftalik veriler getirildi."
      );
    } catch (err) {
      return ResponseGenerator(res, 500, true, {}, "Serverda bir hata olustu");
    }
  } else {
    return ResponseGenerator(res, 400, true, {}, "Method desteklenmiyor.");
  }
}
