import { IMemberStat, IMemberStats } from "../../interfaces/memberStats";
import StatElement from "./StatElement";

export default function TeamMemberStats({stats, classes = ' min-w-20 max-h-44'}: {stats: IMemberStats, classes?: string}) {
  const statsElement = stats.map((stat: IMemberStat, index: number) => (
    <StatElement key={index} stat={stat} />
  ));

  return (
    <div className={`flex flex-col justify-around bg-white dark:bg-zinc-900 border border-stone-400 rounded-md p-1 ${classes}`}>
      {statsElement}
    </div>
  );
}