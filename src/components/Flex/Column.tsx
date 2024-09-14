interface ColumnProps {
  title: string;
  content: string | number;
}

export default function Column({ title, content }: ColumnProps) {
  return (
    <div className="flex flex-col mr-2 min-w-max bg-gradient-to-b from-emerald-600 to-cyan-800 py-1 px-3 rounded-md">
      <span className="flex justify-center text-sm">{title}</span>
      <span className="flex justify-center font-bold">{content}</span>
    </div>
  );
}