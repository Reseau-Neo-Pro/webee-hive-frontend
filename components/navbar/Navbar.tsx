import { Grid } from "@mui/material";
import React, { useState } from "react";
import Logo from "../header/Logo";
import Menu from "./Menu";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";


const Navbar = () => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };
  const containerWidth = showText ? "15%" : "5%";
  return (
    <Grid
      container
      className="navbarContainer"
      maxWidth={containerWidth}
      height="100vh"
      //sx={{ border: "1px solid red" }}
      display="flex"
      justifyContent="center"
    >
      <Grid
        className="navbar"
        item
        xs={11}
        sx={{
          // border: "1px green solid",
          display: "inline 'flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Logo showText={showText} />
        <Grid
          item
          className="navbarMenu"
          sx={{
            //border: "1px solid blue",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
            top: "13rem",
          }}
        >
          <Menu showText={showText} />
          {showText ? (
            <AiOutlineDoubleLeft
              size="3rem"
              onClick={toggleText}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AiOutlineDoubleRight
              size="3rem"
              onClick={toggleText}
              style={{ cursor: "pointer" }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
