import "@/styles/globals.css";
import { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/App.css';
import { Poppins, Inter } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prefinn Fintech & Solution",
  description:
    "Compare home loans, balance transfers, or loans against property from  banks with Prefinn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans`}>
     
        {children}
      </body>
    </html>
  );
}
