import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Group } from "@mantine/core";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import classes from "../styles/PlatformIconList.module.css";

interface Props {
  platforms: Platform[];
}

const PlatformIconlist = ({ platforms }: Props) => {
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
  };

  return (
    <Group my={3}>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? (
          <Icon key={platform.id} className={classes.icon} size={20} />
        ) : null;
      })}
    </Group>
  );
};

export default PlatformIconlist;
