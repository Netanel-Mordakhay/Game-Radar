import { Box, Button, Menu } from "@mantine/core";
import { BsChevronDown } from "react-icons/bs";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiAtari, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import usePlatfroms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatfroms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const iconMap: { [key: string]: IconType } = {
    // Mapping slug into icon name
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
  };

  if (error) return null;

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
            {selectedPlatform?.name || "Platforms"}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {data?.results.map((platform) => {
            const Icon = iconMap[platform.slug];
            return Icon ? (
              <Menu.Item
                onClick={() => setSelectedPlatformId(platform.id)}
                key={platform.id}
                leftSection={<Icon key={platform.id} />}
              >
                {platform.name}
              </Menu.Item>
            ) : null;
          })}
          <Menu.Divider />
          <Menu.Item color="gray">Clear</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
