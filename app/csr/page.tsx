"use client";

import { getPhotos } from "@/src/shared/api";
import { Photo } from "@/src/shared/types/photo";
import { PhotoCard } from "@/src/shared/ui";
import { useEffect, useState } from "react";
import { Suspense } from "react";
export default function Page() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos();
      setPhotos(data);
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-5 gap-4 p-4">
        {photos?.map(({ id, title, url }) => (
          <PhotoCard key={id} id={id} title={title} url={url} />
        ))}
      </div>
    </Suspense>
  );
}
