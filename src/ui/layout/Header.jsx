import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

import UserAvatar from "../../features/authentication/UserAvatar";
import ButtonIcon from "../styled/ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../../features/authentication/Logout";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const Ul = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <UserAvatar />

      <Ul>
        <li>
          <ButtonIcon onClick={() => navigate("/account")}>
            <HiOutlineUser />
          </ButtonIcon>
        </li>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <Logout />
        </li>
      </Ul>
    </StyledHeader>
  );
}

export default Header;
