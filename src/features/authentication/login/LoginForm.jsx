import { useState } from "react";
import Form from "../../../ui/styled/Form";
import FormField from "../../../ui/styled/FormField";
import Input from "../../../ui/styled/Input";
import Button from "../../../ui/styled/Button";
import SpinnerMini from "../../../ui/styled/SpinnerMini";
import { useLogin } from "./useLogin";
// import { uploadData } from "../../../data/Uploader";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "guest@wildoasis.com",
    password: "guest123",
  });

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputs.email || !inputs.password) return;

    login(inputs);
    // login(inputs, {
    //   onSettled: async () => uploadData(),
    // });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          disabled={isLoading}
        />
      </FormField>

      <FormField label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          disabled={isLoading}
        />
      </FormField>

      <FormField>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormField>
    </Form>
  );
}

export default LoginForm;
