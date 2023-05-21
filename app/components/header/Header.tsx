// Import de tout mes composants React
import Searchbar from "./Searchbar";
import Logo from "./Logo";
import ProfileAndNotif from "./ProfileAndNotif";
import LoginAndSignup from "./LoginAndSignup";

// Init de l'interface pour les props de Header
interface HeaderProps {
  currentUser?: boolean; //currentUser non required -> type booleen
}

// Initialisation du composant fonctionnel React 'FC'<Props> puis appel de la fonction
const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="flex items-center justify-between h-36 w-full shadow-md px-8">
      <Logo />
      <Searchbar />
      {currentUser ? <ProfileAndNotif /> : <LoginAndSignup />}
    </header>
  );
};

export default Header;
