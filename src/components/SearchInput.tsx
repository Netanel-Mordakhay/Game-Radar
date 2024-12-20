import { Input } from "@mantine/core";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Input
        variant="filled"
        placeholder="Search games..."
        leftSection={<FaSearch />}
        ref={ref}
      />
    </form>
  );
};

export default SearchInput;
