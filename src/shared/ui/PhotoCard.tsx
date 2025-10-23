import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  url: string;
}

export const PhotoCard = ({ id, title, url }: Props) => (
  <div
    className="flex flex-col max-w-[300px] gap-4 p-4 items-start rounded-md border border-white/30 hover:border-white/80 transition-all cursor-pointer"
    id={id.toString()}
  >
    <Image src={url} alt={title} width={200} height={200} />
    <p className="text-center font-semibold">{title}</p>
  </div>
);
