import noImage from "../assets/placeholder.webp";

const getImageURL = (url: string) => {
  if (!url) return noImage;
  return url;
};

export default getImageURL;
