// import { getPhotos } from "@/src/shared/api";
import { Photo } from "@/src/shared/types/photo";
import { PhotoCard } from "@/src/shared/ui";

export default async function Page() {
  // const photos = await getPhotos();
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=${10}`
  );
  const photos: Photo[] = await response.json();
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("adsd");
    }, 2000);
  });

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {photos?.map(({ id, title, url }) => (
        <PhotoCard key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
}
