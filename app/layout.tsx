import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryProvider } from "@/lib/queryClient";
import { PoppisProvider, usePoppis } from "@/lib/poppisContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PoPa",
  description: "Gather points and score big",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <PoppisProvider>
            <NavBar />
            {children}
          </PoppisProvider>
          <ReactQueryDevtools />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
