import { useState } from "react";
import Form from "../../ui/styled/Form";
import FormRowVertical from "../../ui/shared/FormRowVertical";
import Input from "../../ui/styled/Input";
import Button from "../../ui/styled/Button";
import SpinnerMini from "../../ui/styled/SpinnerMini";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  const { toggleAuth } = useDarkModeContext();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    toggleAuth();
    navigate("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
