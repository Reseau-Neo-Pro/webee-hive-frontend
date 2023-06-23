import MenuProps from "@/interfaces/MenuProps";
import { Box } from "@mui/material";
import Image from "next/image";

const Logo: React.FC<MenuProps> = ({ showText }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={5}
      flexDirection="column"
      marginBottom={3}
      data-testid="navbar-logo"
    >
      <Image
        src="/images/LOGO.png"
        alt="WeBee Hive Logo"
        width={82}
        height={82}
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
