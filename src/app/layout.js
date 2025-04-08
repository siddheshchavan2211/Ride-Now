import { Teachers } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const teacher = Teachers({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata = {
  title: "Ride Now",
  description: "book test drive now",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${teacher.variable} antialiased`}>
          <Header />
          <main className=" min-h-screen ">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
