import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../../ui/styled/ButtonIcon";
import SpinnerMini from "../../../ui/styled/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
