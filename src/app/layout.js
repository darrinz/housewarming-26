import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Darrin and Joe's Housewarming",
  description: "man i hate this part of texas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/woi6tll.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
