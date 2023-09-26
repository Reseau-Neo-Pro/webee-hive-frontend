
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

// logo de webeehive
import Logo from "./Logo";

// partie icone
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineEventNote } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";


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

      {/* logo navbar */}
      <div className="logoNavbar mt-4">
        <Logo />
      </div>

      {/* navbar menu */}
      <nav>
        <div className="navbar">

          <button className="lg:hidden text-2xl justify-center flex mx-auto"
            onClick={toggleNav}>
            <FaBars />
          </button>

          <ul className={` flex   mt-4  flex-col  text-2xl `}>

            <li className=" flex flex-row items-center justify-center hover:bg-yellow-500 rounded-full mb-2">
              <Link href='/acceuil'
                className={`${pathname} flex items-center justify-center`} >
                <HiOutlineHome className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden '} `}>
                  ACCUEIL
                </span>
              </Link>
            </li>

            <li className={`justify-center flex flex-row items-center hover:bg-yellow-500 rounded-full mb-2`}>
              <Link href='/utilisateurs'
                className={`${pathname} flex items-center justify-center`}  >
                <HiOutlineUsers className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden'} `}>
                  UTILISATEURS
                </span>
              </Link>
            </li>


            <li className={`justify-center flex flex-row items-center hover:bg-yellow-500 rounded-full mb-2`}>
              <Link href='/projets'
                className={`${pathname} flex items-center justify-center`}  >
                <HiOutlineRocketLaunch className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden'} `}>
                  PROJETS
                </span>
              </Link>
            </li>


            <li className={`justify-center flex flex-row items-center hover:bg-yellow-500 rounded-full mb-2`}>
              <Link href='/messagerie'
                className={`${pathname} flex items-center justify-center`}  >
                <TbMessageCircle className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden'} `}>
                  MESSAGERIE
                </span>
              </Link>
            </li>


            <li className={`justify-center flex flex-row items-center hover:bg-yellow-500 rounded-full mb-2`}>
              <Link href='/evenements'
                className={`${pathname} flex items-center justify-center`}   >
                <MdOutlineEventNote className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden'} `}>
                  EVENEMENTS
                </span>
              </Link>
            </li>


            <li className={`justify-center flex flex-row items-center hover:bg-yellow-500 rounded-full mb-2`}>
              <Link href='/localisation'
                className={`${pathname} flex items-center justify-center`}>
                <IoEarthOutline className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden'} `}>
                  LOCALISATION
                </span>
              </Link>
            </li>


            <li className={`justify-center flex flex-row items-center hover:bg-yellow-500 rounded-full mb-2`}>
              <Link href='/parametres'
                className={`${pathname} flex items-center justify-center`}  >
                <IoSettingsOutline className="mr-2" />
                <span className={`${isNavOpen ? 'flex ' : 'hidden'}`}>
                  PARAMETRES
                </span>
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;