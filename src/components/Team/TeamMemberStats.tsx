import { IMemberStats } from "../../interfaces/memberStats";
import StatColumn from "./StatColumn";

export default function TeamMemberStats({stats}: {stats: IMemberStats}) {
  const statsColumns = stats.map((stat: any, index: number) => (
    <StatColumn key={index} stat={stat} />
  ));

  return (
    <div className="flex min-w-32 justify-between border border-stone-400 rounded-md py-2 p-1">
      {statsColumns}
    </div>
  );
}