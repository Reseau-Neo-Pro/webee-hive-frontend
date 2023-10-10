
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import menuNavBar from "./Menu";

import { FaBars } from "react-icons/fa";

// icone menu
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";


const iconComponents: { [key: string]: React.ReactElement }  = {
  HiOutlineHome: <HiOutlineHome />,
  HiOutlineUsers: <HiOutlineUsers />,
  HiOutlineRocketLaunch: <HiOutlineRocketLaunch />,
  AiOutlineMessage: <AiOutlineMessage />,
  MdOutlineEventNote: <MdOutlineEventNote />,
  IoSettingsOutline: <IoSettingsOutline />,
  BsGlobe: <BsGlobe />
}

const Navbar = () => {

  // permet le routage entre les pages
  const pathname = usePathname();

  // isNavOpen controle si barre est ouverte ou fermé - etat fermé en initial
  const [isNavOpen, setIsNavOpen] = useState(false)

  // permet de basculé l'etat de la barre de navigation entre ouverte et fermée quand on clique sur le bouton
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={`${isNavOpen ? 'w-52' : ' w-12 '} `}>


      {/* navbar menu */}
      <nav>
        <div className="navbar">

          <button className="lg:hidden text-2xl justify-center flex mx-auto"
            onClick={toggleNav}>
            <FaBars />
          </button>

          <ul className={` flex   mt-4  flex-col  text-2xl `}>

            {menuNavBar.map((item) => (

              <li
                key={item.id} className="flex flex-row items-center justify-center hover:bg-yellow-500 rounded-full mb-2">
                <Link href={item.link} className={`${pathname} flex items-center justify-center`} >
                {iconComponents[item.icon]}
                  <span className={`${isNavOpen ? 'flex ' : 'hidden '} `}>{item.name}</span>
                </Link>
              </li>


            ))}

            {/* <li className=" flex flex-row items-center justify-center hover:bg-yellow-500 rounded-full mb-2">
              <Link href='/acceuil'
                className={`${pathname} flex items-center justify-center`} >
                < p className="logo mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden '} `}>
                  ACCUEIL
                </span>
              </Link>
            </li> */}



          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;