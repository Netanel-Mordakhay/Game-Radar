import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  playtime: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
