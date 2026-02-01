export function Divider() {
  return (
    <div className="flex h-6 items-stretch justify-center overflow-x-hidden border border-neutral-200">
      {Array.from({ length: 128 }).map((_, i) => (
        <div
          key={i}
          className="h-full w-4 flex-none border-l border-neutral-200 bg-linear-to-r from-white to-stone-50"
        />
      ))}
    </div>
  );
}
