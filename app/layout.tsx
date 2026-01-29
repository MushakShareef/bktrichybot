import "./globals.css";
import type { ReactNode } from "react";
import Header from "./components/Header";

export const metadata = {
  title: "Brahma Kumaris – Gyan Bot",
  description: "Spiritual knowledge and guidance",
  manifest: "/manifest.json",
  themeColor: "#8903ef",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ta">
      <body style={{ margin: 0 }}>
        <Header />
        <main
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
