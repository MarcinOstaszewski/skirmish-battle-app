import FullWidthFlex from "../CommonElements/FullWidthFlex";

export default function FeaturesListContainer(
  {title, children}: {title: string, children: React.ReactNode}
) {

  return (
    <FullWidthFlex classNames="flex-grow flex-wrap max-h-15 border text-xs dark:bg-zinc-900 border-stone-300 rounded-md p-1 gap-1 overflow-auto max-w-4xl">
      <span className="rounded-md p-1 font-bold dark:font-normal">{title}</span>
      {children}
    </FullWidthFlex>
  );
}