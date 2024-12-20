import { Skeleton, Stack } from "@mantine/core";

const GameCardSkeleton = () => {
  return (
    <Stack justify="space-between" h="100%">
      <Skeleton height={160} />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </Stack>
  );
};

export default GameCardSkeleton;
