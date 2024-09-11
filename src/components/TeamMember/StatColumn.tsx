export default function StatColumn({ stat }: any) {
  console.log(stat)
  return (
    <div className="flex flex-col">
      <span className="text-sm color-red-800">{stat?.statName}</span>
      <span className="text-lg">{stat?.content}</span>
    </div>
  );
}