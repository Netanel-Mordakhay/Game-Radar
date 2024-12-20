import { Input } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <Input
      variant="filled"
      placeholder="Search games..."
      style={{ flex: 1 }}
      leftSection={<FaSearch />}
    />
  );
};

export default SearchInput;
