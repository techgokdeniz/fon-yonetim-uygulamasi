import { useQuery } from "@tanstack/react-query";

export function useExchangeRates() {
  const { isLoading, data, error } = useQuery(["rates"], fetchRate, {
    refetchOnWindowFocus: false,
  });

  const detectedRate = ["ABD DOLARI", "EURO", "İNGİLİZ STERLİNİ"];

  async function fetchRate() {
    try {
      const response = await fetch(
        "https://hasanadiguzel.com.tr/api/kurgetir",
        { cache: "no-cache" }
      );
      const data = await response.json();

      let exchangeRate = data.TCMB_AnlikKurBilgileri;

      let dataArray = [];

      exchangeRate.map((item) => {
        if (detectedRate.includes(item.Isim)) {
          dataArray.push(item);
        }
      });
      return dataArray;
    } catch (err) {
      throw new Error(err);
    }
  }

  return {
    isLoading,
    error,
    data,
  };
}
