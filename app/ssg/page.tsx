// import { getPhotos } from "@/src/shared/api";
import { Post } from "@/src/shared/types/photo";
import { PostCard } from "@/src/shared/ui";

export default async function Page() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const photos: Post[] = await response.json();

  return (
    <div className="flex flex-col gap-4">
      {photos?.map(({ id, title }) => (
        <PostCard key={id} id={id} title={title} />
      ))}
    </div>
  );
}
