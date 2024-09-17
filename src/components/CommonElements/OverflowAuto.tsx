export default function OverflowAuto({children}: { children: React.ReactNode; }) {
  return (
    <div className="h-full overflow-auto pb-32">
      {children}
    </div>
  );
}