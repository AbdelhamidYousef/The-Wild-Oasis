import DashboardLayout from "../../features/dashboard/DashboardLayout";
import DashboardFilter from "../../features/dashboard/DashboardFilter";
import Heading from "../styled/Heading";
import Flex from "../styled/Flex";

function Dashboard() {
  return (
    <>
      <Flex>
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Flex>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
