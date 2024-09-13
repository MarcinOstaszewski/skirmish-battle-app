import { IMemberStat, IMemberStats } from "../../interfaces/memberStats";
import StatColumn from "./StatColumn";

export default function TeamMemberStats({stats}: {stats: IMemberStats}) {
  const statsColumns = stats.map((stat: IMemberStat, index: number) => (
    <StatColumn key={index} stat={stat} />
  ));

  return (
    <div className="flex flex-col min-w-20 max-h-44 justify-around border border-stone-400 rounded-md p-1">
      {statsColumns}
    </div>
  );
}