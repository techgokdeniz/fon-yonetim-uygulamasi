import baseTefasFetch from "@/hooks/baseFetch";
import ResponseGenerator from "@/lib/ResponseGenerator";

export default async function handler(req, res) {
  const { data, error } = await baseTefasFetch(
    "/DB/getAllMainCharts",
    "dil=TR"
  );

  if (error) {
    return res.status(500).json({
      error: true,
      message: error,
    });
  }

  return ResponseGenerator(
    res,
    200,
    false,
    data[data.length - 2].Table,
    "Hacimi artışta olan Şirketler Listesi"
  );
}
