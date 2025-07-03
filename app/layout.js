import "./globals.css";
import MainHeader from "./components/main-header/main-header";
import Footer from "./components/footer/footer";

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
