import CabinTable from "../../features/cabins/CabinTable";
import Heading from "../styled/Heading";
import Flex from "../styled/Flex";
import AddCabin from "../../features/cabins/AddCabin";
import CabinTableOperations from "../../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Flex type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Flex>

      <Flex type="vertical">
        <CabinTable />
        <AddCabin />
      </Flex>
    </>
  );
}

export default Cabins;
