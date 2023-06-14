import Navigation from "@/components/navigation/Navigation";
import "../styles/globals.css";

export const metadata = {
  title: "Nicole D. Losana",
  description: "My Portfolio Nicole Losana",
  keywords: "portfolio,fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nicole Losana - Portfolio</title>
        <link rel="nl icon" href="images/NL.ico" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
