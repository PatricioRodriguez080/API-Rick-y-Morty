import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/Components/NavBar";

export const metadata: Metadata = {
  title: "Rick and Morty App",
  description: "Aplicacion desarrollada para el consumo de la Rick and Morty API",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <NavBar />

      <body>
        {children}
      </body>
    </html>
  );
}
