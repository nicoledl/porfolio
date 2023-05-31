import Navigation from "@/components/navigation/Navigation";
import "../styles/globals.css";

export const metadata = {
  title: "Nicole D. Losana",
  description: "My Porfolio Nicole Losana",
  keywords: "porfolio,fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nicole Losana - Porfolio</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
