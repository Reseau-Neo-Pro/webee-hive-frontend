import { Grid, useTheme, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const Navbar = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const [showText, setShowText] = useState(!isBelowMd);

  useEffect(() => {
    setShowText(!isBelowMd);
  }, [isBelowMd]);

  const toggleText = () => {
    setShowText(!showText);
  };

  const containerWidth = showText && !isBelowMd ? "15rem" : "4rem";

  return (
    <Grid
      container
      className="navbarContainer"
      data-testid="navbar-container"
      maxWidth={containerWidth}
      height="100vh"
      sx={{
        //border: "1px solid red",
        backgroundColor: "background.main",
        minWidth: "fit-content",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "flex-start",
        justifyContent: "center",
        gap: "5rem",
      }}
    >
      <Logo showText={showText} data-testid="navbar-logo" />
      <Grid
        className="navbar"
        item
        xs={11}
        sx={{
          // border: "1px green solid",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "13rem",
        }}
      >
        <Menu showText={showText} data-testid="navbar-menu" />
        {!isBelowMd && (
          <>
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
                data-testid="toggle-button"
              />
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Navbar;
