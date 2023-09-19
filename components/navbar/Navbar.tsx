
import React from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

import  Logo  from "./Logo";

import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineEventNote } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";


const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="ContainerNavbar">


      <div className="logoNavbar">
        <Logo/>
        <p>pouet</p>
      </div>


      <nav>
        <div className="navbarMenu">
          <ul>

            <li className={pathname == "/" ? "active" : ""}>
              <Link href='/' >
                <span><HiOutlineHome /> ACCUEIL</span>
              </Link>
            </li>


            <li>
              <Link href='/utilisateurs'
                className={pathname == "/" ? "active" : ""}  >
                <span><HiOutlineUsers />UTILISATEURS </span>
              </Link>
            </li>


            <li>
              <Link href='/projets'
                className={pathname == "/" ? "active" : ""}  >
                <span><HiOutlineRocketLaunch />PROJETS </span>
              </Link>
            </li>


            <li>
              <Link href='/messagerie'
                className={pathname == "/" ? "active" : ""}  >
                <span><TbMessageCircle />MESSAGERIE </span>
              </Link>
            </li>


            <li>
              <Link href='/evenements'
                className={pathname == "/" ? "active" : ""}  >
                <span><MdOutlineEventNote />EVENEMENTS </span>
              </Link>
            </li>


            <li>
              <Link href='/localisation'
                className={pathname == "/" ? "active" : ""}  >
                <span><IoEarthOutline />LOCALISATION </span>
              </Link>
            </li>


            <li>
              <Link href='/parametres'
                className={pathname == "/" ? "active" : ""}  >
                <span><IoSettingsOutline />PARAMETRES </span>
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;