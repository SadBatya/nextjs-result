import { type Photo } from "@/src/shared/types/photo";
import { PhotoCard } from "@/src/shared/ui";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Photo[] = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((res) => res.json());
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const photo: Photo = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  ).then((res) => res.json());

  return (
    <div>
      <PhotoCard id={photo.id} title={photo.title} url={photo.url} />
    </div>
  );
}
