import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/main-header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "POLYWOOD®",
  description: "POLYWOOD®",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
