
export default function FeaturesListContainer(
  {title, children}: {title: string, children: React.ReactNode}
) {

  return (
    <div className="flex flex-grow flex-wrap max-h-15 w-full border text-xs border-stone-300 rounded-md p-1 gap-1 overflow-auto">
      <strong className="rounded-md p-1">{title}</strong>
      {children}
    </div>
  );
}