interface ColumnProps {
  title: string;
  content: string | number;
}

export default function Column({ title, content }: ColumnProps) {
  return (
    <div className="flex flex-col mr-2 min-w-max bg-emerald-700 text-white py-1 px-3 rounded-md">
      <span className="text-sm text-stone-100">{title}</span>
      <span className="font-bold">{content}</span>
    </div>
  );
}