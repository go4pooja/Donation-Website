// src/app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kautike Charitable Foundation - Education, Health, Social Welfare & Relief",
  description: "Kautike Charitable Foundation is dedicated to promoting education, health, social welfare, relief, and the well-being of humanity in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
