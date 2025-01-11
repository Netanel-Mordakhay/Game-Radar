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
import { GiHeavyFighter, GiPlatform } from "react-icons/gi";

export const iconMap: { [key: string]: IconType } = {
  // Mapping slug into icon name
  // Platforms
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
  // Genres
  action: GiHeavyFighter,
  indie: GiPlatform,
};

export default iconMap;
