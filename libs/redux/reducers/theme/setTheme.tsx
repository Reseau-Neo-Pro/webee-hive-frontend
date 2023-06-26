import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { toggleTheme } from "./themeSlice";

const SetTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.lightTheme);
  const storedTheme = localStorage.getItem("theme");

  if (JSON.stringify(theme) !== storedTheme) dispatch(toggleTheme());

  return <></>;
};
export default SetTheme;
