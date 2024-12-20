import { Skeleton, Stack } from "@mantine/core";

const GameCardSkeleton = () => {
  return (
    <Stack justify="space-between" h="100%">
      <Skeleton height={160} />
      <Skeleton height={60} />
    </Stack>
  );
};

export default GameCardSkeleton;
