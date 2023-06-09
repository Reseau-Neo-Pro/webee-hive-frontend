"use client";

import "./globals.css"; //Import du global css -> dont Tailwinds
// Import de la font grace a Next
import { Bebas_Neue } from "next/font/google";
// Import du composant Header
import Header from "./components/header/Header";
import { useCallback, useState } from "react";
import Navbar from "./components/navbar/Navbar";


//initialisation de la font dans une variable
const font = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

//Insert les metadata dans le head
// export const metadata = {
//   title: "WeBee Hive",
//   description: "Réseau social pour néo-pro du web",
// };

// Function Principal du layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState(false);

  const toggleConnected = useCallback(() => {
    setCurrentUser(!currentUser);
  }, [currentUser]);

  return (
    <html lang="fr">

      <body
        className={font.className}
        style={{ border: "2px solid blue", display: "flex", maxWidth: "100vw" }} //tailwind -> border-[2px]
      >
        {/*Layout Ici */}
        {/* Navbar */}
        <Navbar />
        
        <div
          className="main"
          style={{ border: "1px solid purple", width: "100%" }}
        >
          <Header currentUser={currentUser} />
          {children}
          <div
            className="cursor-pointer border-2 rounded-md bg-neutral-400 w-fit p-3 m-7"
            onClick={toggleConnected}
          >
            Connected
            {/* les pages s'afficheront a la place du "children" */}
            {/* {children} */}
          </div>
        </div>
        {/* les pages s'afficheront a la place du "children" */}
         {/* {children} */}

        {/* Footer */}
      </body>
    </html>
  );
}
