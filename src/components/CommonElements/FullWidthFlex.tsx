export default function FullWidthFlex({ children, classNames }: { children: React.ReactNode, classNames?: string }) {
  return (
    <div className={`flex w-full ${classNames}`}>
      {children}
    </div>
  );
}