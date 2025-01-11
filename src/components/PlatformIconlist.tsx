import { Group } from "@mantine/core";
import { Platform } from "../entities/Platform";
import classes from "../styles/PlatformIconList.module.css";
import iconMap from "../data/icon-map";

interface Props {
  platforms: Platform[];
}

const PlatformIconlist = ({ platforms }: Props) => {
  return (
    <Group my={5}>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? (
          <Icon key={platform.id} className={classes.icon} size={18} />
        ) : null;
      })}
    </Group>
  );
};

export default PlatformIconlist;
