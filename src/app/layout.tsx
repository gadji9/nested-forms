import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ligmaballs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 flex justify-center overflow-hidden`}
      >
        <div className="w-full h-full lg:container flex py-5 flex pl-10 gap-10">
          {children}
        </div>
      </body>
    </html>
  );
}
