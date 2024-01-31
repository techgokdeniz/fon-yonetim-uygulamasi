import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { Provider } from "react-redux";
import Store from "@/store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Fon Yönetim Uygulaması</title>
        <meta name="description" content="Fon Yönetim Uygulaması" />
      </Head>
      <ThemeProvider attribute="class" enableSystem>
        <Provider store={Store}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Toaster />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}
