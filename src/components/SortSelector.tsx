import { Box, Menu, Button } from "@mantine/core";
import { BsChevronDown } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { TbAbc, TbChartBarPopular } from "react-icons/tb";
import { SiMetacritic } from "react-icons/si";
import { CiCalendarDate } from "react-icons/ci";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Metacritic" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Box mb={15} mt={6}>
      <Menu
        shadow="md"
        transitionProps={{ transition: "fade", duration: 150 }}
        position="top-start"
        withArrow
      >
        <Menu.Target>
          <Button
            size="md"
            color="gray"
            variant="gradient"
            rightSection={<BsChevronDown />}
          >
            Sort: {currentSortOrder?.label || "Relevance"}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={<TbChartBarPopular />}
            onClick={() => setSortOrder("")}
          >
            Relevance
          </Menu.Item>
          <Menu.Item
            leftSection={<MdDateRange />}
            onClick={() => setSortOrder("-added")}
          >
            Date Added
          </Menu.Item>
          <Menu.Item
            leftSection={<TbAbc />}
            onClick={() => setSortOrder("name")}
          >
            Name
          </Menu.Item>
          <Menu.Item
            leftSection={<CiCalendarDate />}
            onClick={() => setSortOrder("-release")}
          >
            Release Date
          </Menu.Item>
          <Menu.Item
            leftSection={<SiMetacritic />}
            onClick={() => setSortOrder("-metacritic")}
          >
            Metacritic
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item color="gray">Clear</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default SortSelector;
