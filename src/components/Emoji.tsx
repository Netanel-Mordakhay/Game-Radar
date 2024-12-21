import { Image } from "@mantine/core";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import classes from "../styles/Emoji.module.css";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: string } = {
    5: bullsEye,
    4: thumbsUp,
    3: meh,
  };

  const titleMap: { [key: number]: string } = {
    5: "Exceptional",
    4: "Recommended",
    3: "meh",
  };

  return (
    <Image
      src={emojiMap[rating]}
      w={30}
      h={30}
      className={classes.emojiImage}
      title={titleMap[rating]}
    />
  );
};

export default Emoji;
