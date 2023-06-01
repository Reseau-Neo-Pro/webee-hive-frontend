import { Box } from "@mui/material";
import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  toggleText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ showText, toggleText }) => {
  const handleClick = () => {
    toggleText(!showText); // Appeler la fonction toggleDrawer lors du clic sur le logo
  };
  return (
    // <div className="flex items-center gap-5">
    //   <Image
    //     src="/images/LOGO.png"
    //     alt="WeBee Hive Logo"
    //     width={82}
    //     height={82}
    //   />
    //   <Image src="/images/NAME.png" alt="Webee Hive" width={208} height={39} />
    // </div>

    <Box display="flex" alignItems="center" gap={5} flexDirection="column">
      <Image
        src="/images/LOGO.png"
        alt="WeBee Hive Logo"
        width={82}
        height={82}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      {showText && (
        <Image
          src="/images/NAME.png"
          alt="Webee Hive"
          width={208}
          height={39}
        />
      )}
    </Box>
  );
};

export default Logo;
