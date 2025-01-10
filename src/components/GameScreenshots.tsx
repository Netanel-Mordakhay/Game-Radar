import { useState } from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, Modal, SimpleGrid, Skeleton } from "@mantine/core";

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
      <SimpleGrid cols={{ base: 1, md: 2 }}>
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
