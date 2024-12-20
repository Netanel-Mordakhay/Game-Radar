import { Box, Menu, Button } from "@mantine/core";
import { BsChevronDown } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { TbAbc, TbChartBarPopular } from "react-icons/tb";
import { SiMetacritic } from "react-icons/si";
import { CiCalendarDate } from "react-icons/ci";

interface Props {
  sortOrder: string;
  onSelectedSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Metacritic" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Box mb={15}>
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
            onClick={() => onSelectedSortOrder("")}
          >
            Relevance
          </Menu.Item>
          <Menu.Item
            leftSection={<MdDateRange />}
            onClick={() => onSelectedSortOrder("-added")}
          >
            Date Added
          </Menu.Item>
          <Menu.Item
            leftSection={<TbAbc />}
            onClick={() => onSelectedSortOrder("name")}
          >
            Name
          </Menu.Item>
          <Menu.Item
            leftSection={<CiCalendarDate />}
            onClick={() => onSelectedSortOrder("-release")}
          >
            Release Date
          </Menu.Item>
          <Menu.Item
            leftSection={<SiMetacritic />}
            onClick={() => onSelectedSortOrder("-metacritic")}
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
