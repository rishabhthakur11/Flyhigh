import Footer from "./_components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Fly High",
  description:
    "Get inspired by the work of millions of top-rated designers & agencies around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
