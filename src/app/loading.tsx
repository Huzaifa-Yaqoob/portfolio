import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="my-container space-y-8">
      <Skeleton className="w-full h-32 bg-peachShades-p85 rounded-lg" />
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-8">
        <Skeleton className="w-full h-40  bg-peachShades-p85 rounded-lg" />
        <Skeleton className="w-full h-40 bg-peachShades-p85 rounded-lg" />
        <Skeleton className="w-full h-40 bg-peachShades-p85 rounded-lg" />
        <Skeleton className="w-full h-40 bg-peachShades-p85 rounded-lg" />
      </div>
    </div>
  );
}
