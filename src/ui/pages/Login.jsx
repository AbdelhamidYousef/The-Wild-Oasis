import styled from "styled-components";
import Logo from "../shared/Logo";
import Heading from "../styled/Heading";
import LoginForm from "../../features/authentication/login/LoginForm";
// import Uploader from "../../data/Uploader";

const StyledLogin = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <StyledLogin>
      {/* <Uploader /> */}
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;
