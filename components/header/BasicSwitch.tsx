import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./../../lib/redux/hooks";
import { toggleTheme } from "@/lib/redux/reducers/themeSlice";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitch() {
  const dispatch = useAppDispatch();
  const { lightTheme } = useAppSelector((state) => state.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme()); // Dispatch l'action pour changer le thème
  };

  return (
    <div>
      <Switch {...label} checked={lightTheme} onChange={handleThemeChange} />
    </div>
  );
}
