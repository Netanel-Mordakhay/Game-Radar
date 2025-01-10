import { useState } from "react";
import useScreenshots from "../../hooks/useScreenshots";
import classes from "../../styles/GameScreenshots.module.css";
import { Image, Modal, SimpleGrid, Skeleton, Title } from "@mantine/core";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const skeletons = [1, 2, 3, 4, 5, 6];
  // States for modal managment
  const [opened, setOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (error) throw error;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setOpened(true);
  };

  return (
    <>
      <Title order={3}>Screenhosts</Title>
      <SimpleGrid cols={{ base: 2, md: 3 }}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <Skeleton key={skeleton} height={200} />
            ))
          : data?.results.map((file) => (
              <Image
                key={file.id}
                src={file.image}
                radius="md"
                onClick={() => handleImageClick(file.image)}
                style={{ cursor: "pointer" }}
                className={classes.screenshotImage}
                title="Game screenshot"
              />
            ))}
      </SimpleGrid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="auto"
        centered
      >
        {selectedImage && (
          <Image src={selectedImage} radius="md" title="Screenshot" />
        )}
      </Modal>
    </>
  );
};

export default GameScreenshots;
