import ColumnContainer from "./ColumnContainer";

interface ColumnProps {
  title: string;
  content: string | number;
}

export default function Column({ title, content }: ColumnProps) {
  return (
    <ColumnContainer>
      <span className="flex justify-center text-sm">{title}</span>
      <span className="flex justify-center font-bold">{content}</span>
    </ColumnContainer>
  );
}