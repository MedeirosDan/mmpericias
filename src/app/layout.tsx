"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import "flowbite";
import "@/styles/globals.css";
import "@/lib/icons"; // IMPORTANDO A CONFIGURAÇÃO DOS ÍCONES
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}