import { type Photo } from "../types/photo";

export const getPhotos = async (limit?: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=${limit || 10}`
  );
  const data: Photo[] = await response.json();
  return data;
};
