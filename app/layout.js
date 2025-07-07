import "./globals.css";
import MainHeader from "./components/main-header/main-header";
import Footer from "./components/footer/footer";
import DynamicTitle from "./components/dynamic-title/dynamic-title";

export const metadata = {
  description: "POLYWOOD®",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <DynamicTitle />
      </head>
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
