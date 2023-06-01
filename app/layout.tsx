import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const font = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "WeBee Hive",
  description: "Réseau social pour néo-pro du web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={font.className}>
        {/*Layout Ici */}
        {/* Navbar */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
