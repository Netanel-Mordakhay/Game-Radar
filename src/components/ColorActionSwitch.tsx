import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorActionIcon = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" && <FaSun size="20px" />}
      {computedColorScheme === "light" && <FaMoon size="20px" />}
    </ActionIcon>
  );
};

export default ColorActionIcon;
