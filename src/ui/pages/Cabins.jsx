import Flex from "../styled/Flex";
import Heading from "../styled/Heading";
import CabinsOperations from "../../features/cabins/CabinsOperations";
import CabinTable from "../../features/cabins/CabinTable";
import AddCabin from "../../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Flex>
        <Heading as="h1">All cabins</Heading>
        <CabinsOperations />
      </Flex>

      <Flex type="vertical">
        <CabinTable />
        <AddCabin />
      </Flex>
    </>
  );
}

export default Cabins;
