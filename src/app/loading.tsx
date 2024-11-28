export default function Loading() {
  return (
    <div className="my-container space-y-8 flex items-center justify-center flex-grow gap-2">
      <div className="text-6xl font-bold animate-opacity-pulse">Loading</div>
      <div className="loader"></div>
    </div>
  );
}
