import { Grid } from "@mui/material";
import React, { useState } from "react";
import Logo from "../header/Logo";

import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleText = () => {
    setShowText(!showText);
  };
  const containerWidth = showText ? "15%" : "5%";
  return (
    <Grid
      container
      className="classNavBar"
      maxWidth={containerWidth}
      height="100vh"
      sx={{ border: "1px solid red" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          border: "1px green solid",
          display: "inline'flex",
          flexDirection: "column",
          justifyContent: "center",
          //width: "auto",
        }}
      >
        <Logo showText={showText} toggleText={toggleText} />
        <Menu
          showText={showText}
          //toggleDrawer={toggleDrawer}
        />
      </Grid>
    </Grid>
  );
};

export default Navbar;
