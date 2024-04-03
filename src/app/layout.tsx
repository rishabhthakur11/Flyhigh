import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const roboto = Alegreya({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fly High",
  description:
    "Get inspired by the work of millions of top-rated designers & agencies around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
