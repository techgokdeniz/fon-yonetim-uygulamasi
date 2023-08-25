export default async function baseTefasFetch(endpoint, body) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEFAS_BASE_URL}${endpoint}`,
      {
        cache: "no-cache",
        method: "POST",
        body: body,
        headers: {
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/4.9.3",
          "Content-Type": "application/x-www-form-urlencoded",
          Connection: "Keep-Alive",
          Host: "www.tefas.gov.tr",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return { data: data };
    } else {
      return { error: response.status };
    }
  } catch (err) {
    return { error: err };
  }
}
