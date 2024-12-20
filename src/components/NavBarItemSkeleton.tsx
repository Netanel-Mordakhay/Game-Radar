import { Group, Skeleton, Stack } from "@mantine/core";

const NavBarItemSkeleton = () => {
  return (
    <>
      <Group align="center">
        <Skeleton height={32} circle />
        <Skeleton height={16} width="60%" />
      </Group>
      <Group align="center">
        <Skeleton height={32} circle />
        <Skeleton height={16} width="40%" />
      </Group>
      <Group align="center">
        <Skeleton height={32} circle />
        <Skeleton height={16} width="70%" />
      </Group>
    </>
  );
};

export default NavBarItemSkeleton;
