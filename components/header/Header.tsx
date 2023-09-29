// Import de tout mes composants React
// import Searchbar from "./Searchbar";
//import Logo from "./Logo";
import ProfileAndNotif from "./ProfileAndNotif";
import LoginAndSignup from "./LoginAndSignup";
import { AppBar, Box, Toolbar } from "@mui/material";
import BasicSwitch from "./BasicSwitch";

// Init de l'interface pour les props de Header
interface HeaderProps {
  currentUser?: boolean; //currentUser non required -> type booleen
}

// Initialisation du composant fonctionnel React 'FC'<Props> puis appel de la fonction
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <Box
      sx={{
        //border: "1px solid orange",
        backgroundColor: "background.main",
      }}
    >
      <AppBar
        position="static"
        className="appbar"
        sx={{ backgroundColor: "transparent", backgroundImage: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Searchbar /> */}
          <BasicSwitch />
          {currentUser ? <ProfileAndNotif /> : <LoginAndSignup />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
