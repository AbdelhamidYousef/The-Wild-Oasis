import { useState } from "react";
import Form from "../../../ui/styled/Form";
import FormRow from "../../../ui/styled/FormRow";
import Input from "../../../ui/styled/Input";
import FileInput from "../../../ui/styled/FileInput";
import Button from "../../../ui/styled/Button";

import { useUser } from "../user/useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserData() {
  // No loading status because the user data is already loaded
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserData;
