import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineEventNote } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";

const menuNavBar = [
  {
    id: 1,
    icon: <HiOutlineHome />,
    name: "ACCUEIL",
    link: "/",
  },
  {
    id: 2,
    icon: <HiOutlineUsers />,
    name: "UTILISATEURS",
    link: "/utilisateurs",
  },
  {
    id: 3,
    icon: <HiOutlineRocketLaunch />,
    name: "PROJETS",
    link: "/projets",
  },
  {
    id: 4,
    icon: <AiOutlineMessage />,
    name: "MESSAGERIE",
    link: "/messagerie",
  },
  {
    id: 5,
    icon: <MdOutlineEventNote />,
    name: "EVENEMENTS",
    link: "/evenements",
  },
  {
    id: 6,
    icon: <BsGlobe />,
    name: "LOCALISATION",
    link: "/localisation",
  },
  {
    id: 7,
    icon: <IoSettingsOutline />,
    name: "PARAMETRES",
    link: "/parametres",
  },
];

export default menuNavBar;
