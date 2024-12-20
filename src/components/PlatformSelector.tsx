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
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatfroms();

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
          {data.map((platform) => {
            const Icon = iconMap[platform.slug];
            return Icon ? (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
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
