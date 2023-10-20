import styled from "styled-components";
import { useDarkModeContext } from "../../context/DarkModeContext";

const Div = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkModeContext();

  return (
    <Div>
      <Img
        src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
        alt="Logo"
        title="Logo"
      />
    </Div>
  );
}

export default Logo;
