import { useAppSelector } from "@/libs/redux/hooks";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { lightPalette, darkPalette } from "@/theme/themes";
import { PaletteOptions } from "@mui/material/styles";

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { lightTheme } = useAppSelector((state) => state.theme);

  const palette = lightTheme ? lightPalette : darkPalette;

  const theme = createTheme({
    palette: palette as PaletteOptions,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600, // Tablette
        md: 960, // Laptop
        lg: 1280,
        xl: 1920,
      },
    },
    // Autres options du thème
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
