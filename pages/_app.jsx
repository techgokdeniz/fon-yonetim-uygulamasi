import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

export default function App({ session, Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <SessionProvider session={session}>
        <QueryClientProvider client={new QueryClient()}>
          <Component {...pageProps} />
          <Toaster />
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
