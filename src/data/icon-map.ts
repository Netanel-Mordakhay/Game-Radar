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
import {
  GiHeavyFighter,
  GiPlatform,
  GiDrakkar,
  GiSwordsEmblem,
  GiBarracks,
  GiPistolGun,
  GiWinterHat,
  GiSteamLocomotive,
  GiPuzzle,
  GiLaddersPlatform,
  GiFloatingPlatforms,
  GiAncientSword,
  GiPoliceCar,
  GiAmericanFootballBall,
  GiBrassKnuckles,
  GiThreeFriends,
  GiChessQueen,
  GiPokerHand,
  GiSecretBook,
} from "react-icons/gi";

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
  adventure: GiDrakkar,
  "role-playing-games-rpg": GiSwordsEmblem,
  strategy: GiBarracks,
  shooter: GiPistolGun,
  casual: GiWinterHat,
  simulation: GiSteamLocomotive,
  puzzle: GiPuzzle,
  arcade: GiLaddersPlatform,
  platformer: GiFloatingPlatforms,
  "massively-multiplayer": GiAncientSword,
  racing: GiPoliceCar,
  sports: GiAmericanFootballBall,
  fighting: GiBrassKnuckles,
  family: GiThreeFriends,
  "board-games": GiChessQueen,
  card: GiPokerHand,
  educational: GiSecretBook,
};

export default iconMap;
