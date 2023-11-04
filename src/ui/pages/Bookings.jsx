import Heading from "../styled/Heading";
import Flex from "../styled/Flex";
import BookingTable from "../../features/bookings/BookingTable";
import BookingTableOperations from "../../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Flex>
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Flex>

      <BookingTable />
    </>
  );
}

export default Bookings;
