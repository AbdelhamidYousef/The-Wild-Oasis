import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "../styled/ButtonIcon";
import { useDarkModeContext } from "../../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
