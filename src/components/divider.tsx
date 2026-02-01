export function Divider() {
  return (
    <div className="flex h-8 items-stretch justify-center overflow-x-hidden border border-neutral-200 mt-10 sm:mt-10 lg:mt-14">
      {Array.from({ length: 128 }).map((_, i) => (
        <div
          key={i}
          className="h-full w-4 flex-none border-l border-neutral-200 bg-linear-to-r from-white to-stone-50"
        />
      ))}
    </div>
  );
}
