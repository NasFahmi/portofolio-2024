import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets:['latin'], weight:'400'});
export const metadata: Metadata = {
  title: "Nasrul Fahmi Ulumuddin",
  description: "Website Portofolio Nasrul Fahmi Ulumuddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
