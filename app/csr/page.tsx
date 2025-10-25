"use client";

import { getPosts } from "@/src/shared/api";
import { Post } from "@/src/shared/types/photo";
import { PostCard, SearchInput } from "@/src/shared/ui";
import { useEffect, useState, useMemo } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search")?.toString();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue?.toLowerCase() || "")
      ),
    [posts, searchValue]
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col gap-4 p-4">
        <SearchInput />
        {filteredPosts.map(({ id, title }) => (
          <PostCard key={id} id={id} title={title} />
        ))}
      </div>
    </Suspense>
  );
};

export default function Page() {
  return (
    <Suspense fallback={"Loading..."}>
      <PostList />
    </Suspense>
  );
}
