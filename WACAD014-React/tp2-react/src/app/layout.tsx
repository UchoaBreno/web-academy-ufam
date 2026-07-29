import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { BootstrapClient } from "./components/BootstrapClient/BootstrapClient";

import QueryProvider from "./providers/QueryProvider";
import { Navbar } from "./components/NavBar/Navbar";

export const metadata: Metadata = {
  title: "WA Loja",
  description: "TP02 React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
  <BootstrapClient />

  <QueryProvider>
    <Navbar />
    {children}

    <ToastContainer
      position="top-right"
      autoClose={2000}
    />
  </QueryProvider>
</body>
    </html>
  );
}
