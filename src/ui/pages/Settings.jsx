import UpdateSettingsForm from "../../features/settings/UpdateSettingsForm";
import Heading from "../styled/Heading";
import Flex from "../styled/Flex";

function Settings() {
  return (
    <Flex type="vertical">
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Flex>
  );
}

export default Settings;
