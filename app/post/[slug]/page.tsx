import { type Post } from "@/src/shared/types/photo";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="text-white/50">{post.body}</p>
    </div>
  );
}
