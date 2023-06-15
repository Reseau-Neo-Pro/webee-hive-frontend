import React from "react";
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  HiOutlineUsers,
  HiOutlineRocketLaunch,
  HiOutlineHome,
} from "react-icons/hi2";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineEventNote } from "react-icons/md";
import { IoEarthOutline, IoSettingsOutline } from "react-icons/io5";
import MenuProps from "@/interfaces/MenuProps";

const Menu: React.FC<MenuProps> = ({ showText }) => {
  //  to do   : mettre les bons liens
  let menuCategories = [
    { id: 1, icon: <HiOutlineHome />, name: "ACCUEIL", link: "/" },
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
      icon: <TbMessageCircle />,
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
      icon: <IoEarthOutline />,
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
  return (
    <List>
      {menuCategories.map((category) => (
        <ListItem
          key={category.id}
          disablePadding
          sx={{ marginBottom: "1.5rem" }}
        >
          <Link
            href={category.link}
            color="inherit"
            underline="none"
            title={!showText ? category.name : undefined}
            sx={{
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#efa700",
                borderRadius: "4px",
                boxShadow: "4px 4px 4px 0px rgba(239, 167, 0, 0.2)",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out", // Transition douce
                zIndex: -1,
              },
              "&:hover::before": {
                opacity: 1,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{
                  fontSize: "1.8rem",
                  color: "inherit",
                  justifyContent: showText ? "flex-start" : "center",
                }}
              >
                {category.icon}
              </ListItemIcon>
              {showText && <ListItemText primary={category.name} />}
            </Box>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Menu;
