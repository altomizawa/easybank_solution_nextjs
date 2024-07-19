import { Public_Sans } from 'next/font/google';
import { Tinos } from 'next/font/google';
import "./globals.css";

const public_sans = Public_Sans({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: "Easybank",
  description: "Next Generation Digital Banking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={public_sans.className}>{children}</body>
    </html>
  );
}
