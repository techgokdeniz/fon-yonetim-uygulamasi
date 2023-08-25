import useTefasFetch from "@/hooks/useFetch";

export default async function handler(req, res) {
  const { data, error } = await useTefasFetch("/DB/getAllMainCharts", "dil=TR");

  if (error) {
    return res.status(500).json({
      error: true,
      message: error,
    });
  }

  res.status(200).json({
    error: false,
    message: "Data was successfully retrieved",
    data: data[data.length - 1].Table,
  });
}
