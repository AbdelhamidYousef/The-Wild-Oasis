import Heading from "../styled/Heading";
import Flex from "../styled/Flex";
import UpdateUserData from "../../features/authentication/updateUser/UpdateUserData";
import UpdatePassword from "../../features/authentication/updateUser/UpdatePassword";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Flex type="vertical">
        <Heading as="h3">Update user data</Heading>
        <UpdateUserData />
      </Flex>

      <Flex type="vertical">
        <Heading as="h3">Update password</Heading>
        <UpdatePassword />
      </Flex>
    </>
  );
}

export default Account;
