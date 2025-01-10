import { Input } from "@mantine/core";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
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
