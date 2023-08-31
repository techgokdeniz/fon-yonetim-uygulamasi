import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({ session, Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Fon Yönetim Uygulaması</title>
        <meta name="description" content="Fon Yönetim Uygulaması" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class" enableSystem>
        <SessionProvider session={session}>
          <QueryClientProvider client={new QueryClient()}>
            <Component {...pageProps} />
            <Toaster />
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
