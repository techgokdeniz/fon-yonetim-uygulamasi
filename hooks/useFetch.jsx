export default async function useTefasFetch(endpoint, body) {
  const { NEXT_PUBLIC_TEFAS_BASE_URL } = process.env;

  try {
    const response = await fetch(`${NEXT_PUBLIC_TEFAS_BASE_URL}${endpoint}`, {
      method: "POST",
      body: body,
      headers: {
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/4.9.3",
        "Content-Type": "application/x-www-form-urlencoded",
        Connection: "Keep-Alive",
        Host: "www.tefas.gov.tr",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { data: data };
    } else {
      return { error: response.status };
    }
  } catch (err) {
    return { error: err.message };
  }
}
