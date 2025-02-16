import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

export const metadata = {
  title: "Area Explore",
  description: "Area Explore App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
