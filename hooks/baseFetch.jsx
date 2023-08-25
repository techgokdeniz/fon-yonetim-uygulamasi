import axios from "axios";

export default async function baseTefasFetch(endpoint, body) {
  try {
    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_TEFAS_BASE_URL}${endpoint}`,
      data: body,
      headers: {
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/4.9.3",
        "Content-Type": "application/x-www-form-urlencoded",
        Connection: "Keep-Alive",
        Host: "www.tefas.gov.tr",
      },
    });

    if (response.status === 200) {
      const data = response.data;
      return { data };
    } else {
      return { error: response.status };
    }
  } catch (err) {
    return { error: err.message };
  }
}
