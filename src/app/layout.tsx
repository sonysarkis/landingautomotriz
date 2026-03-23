import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoHaus Premium | Vehículos de Lujo & Seminuevos",
  description:
    "Descubre nuestra exclusiva selección de vehículos premium. Financiamiento a tu medida, garantía extendida y servicio postventa de primer nivel. Cotiza ahora.",
  keywords: [
    "autos premium",
    "vehículos de lujo",
    "concesionario",
    "financiamiento automotriz",
    "seminuevos certificados",
  ],
  openGraph: {
    title: "AutoHaus Premium | Vehículos de Lujo & Seminuevos",
    description:
      "Descubre nuestra exclusiva selección de vehículos premium. Cotiza ahora.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
