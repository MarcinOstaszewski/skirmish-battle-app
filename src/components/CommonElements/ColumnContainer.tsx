export default function ColumnContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mr-2 min-w-max bg-gradient-to-b from-emerald-600 to-cyan-800 py-1 px-3 rounded-md">
      {children}
    </div>
  );
}
