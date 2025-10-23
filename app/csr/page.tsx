"use client";

import { getPosts } from "@/src/shared/api";
import { Post } from "@/src/shared/types/photo";
import { PostCard } from "@/src/shared/ui";
import { useEffect, useState } from "react";
import { Suspense } from "react";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col gap-4 p-4">
        {posts?.map(({ id, title }) => (
          <PostCard key={id} id={id} title={title} />
        ))}
      </div>
    </Suspense>
  );
}
