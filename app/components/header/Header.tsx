// Import de tout mes composants React
import Searchbar from "./Searchbar";
//import Logo from "./Logo";
import ProfileAndNotif from "./ProfileAndNotif";
import LoginAndSignup from "./LoginAndSignup";
import { AppBar, Box, Toolbar } from "@mui/material";

// Init de l'interface pour les props de Header
interface HeaderProps {
  currentUser?: boolean; //currentUser non required -> type booleen
}

// Initialisation du composant fonctionnel React 'FC'<Props> puis appel de la fonction
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    // <Box className="header" sx={{ border: "1px solid orange" }}>
    //   <header className="flex items-center justify-between h-36 w-full shadow-md px-8">
    //     {/* <Logo /> */}
    //     <Searchbar />
    //     {currentUser ? <ProfileAndNotif /> : <LoginAndSignup />}
    //   </header>
    // </Box>
    <Box sx={{ border: "1px solid orange" }}>
      <AppBar
        position="static"
        className="appbar"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Logo /> */}
          <Searchbar />
          {currentUser ? <ProfileAndNotif /> : <LoginAndSignup />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
