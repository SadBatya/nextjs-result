import { type Photo } from "../types/photo";

export const getPhoto = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data: Photo = await response.json();
  return data;
};
