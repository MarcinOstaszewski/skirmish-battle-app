
export default function FeaturesListContainer(
  {title, children}: {title: string, children: React.ReactNode}
) {

  return (
    <div className="flex flex-grow flex-wrap max-h-15 w-full border text-xs bg-stone-100 dark:bg-zinc-900 border-stone-300 rounded-md p-1 gap-1 overflow-auto">
      <span className="rounded-md p-1 font-bold dark:font-normal">{title}</span>
      {children}
    </div>
  );
}