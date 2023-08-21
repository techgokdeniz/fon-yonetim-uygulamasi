import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <QueryClientProvider client={new QueryClient()}>
        <Component {...pageProps} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
