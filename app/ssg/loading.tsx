import { Skeleton } from "@/src/shared/ui";

export default function Loading() {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton key={index} className="w-[300px] rounded-md h-[300px]" />
      ))}
    </div>
  );
}
