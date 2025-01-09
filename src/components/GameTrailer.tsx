import useTrailers from "../hooks/useTrailers";
import getCroppedImageURL from "../services/image-url";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
      style={{ maxWidth: "100%" }}
    />
  ) : null;
};

export default GameTrailer;
