import MenuProps from "@/app/interfaces/MenuProps";
import { Box } from "@mui/material";
import Image from "next/image";

const Logo: React.FC<MenuProps> = ({ showText, toggleText }) => {
  const handleClick = () => {
    toggleText: void(!showText); // Appeler la fonction toggleText lors du clic sur le logo
  };
  return (
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
    // <div className="flex items-center gap-5">
    //   <Image
    //     src="/images/LOGO.png"
    //     alt="WeBee Hive Logo"
    //     width={82}
    //     height={82}
    //   />
    //   <Image src="/images/NAME.png" alt="Webee Hive" width={208} height={39} />
    // </div>
  );
};

export default Logo;
