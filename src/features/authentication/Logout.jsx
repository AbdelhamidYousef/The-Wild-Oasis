import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/styled/ButtonIcon";
import SpinnerMini from "../../ui/styled/SpinnerMini";
import { useDarkModeContext } from "../../context/DarkModeContext";

function Logout() {
  const { toggleAuth } = useDarkModeContext();
  const isLoading = false;

  return (
    <ButtonIcon disabled={isLoading} onClick={toggleAuth}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
