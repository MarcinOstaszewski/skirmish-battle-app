import { ITeamMember } from "../../interfaces";
import { IMemberStat, IMemberStats } from "../../interfaces/memberStats";
import StatElement from "./StatElement";

export default function TeamMemberStats(
  {stats, isCharacterPage = false, currentCharacter, updateCurrentCharacter}:
  {
    stats: IMemberStats,
    isCharacterPage?: boolean,
    currentCharacter?: ITeamMember,
    updateCurrentCharacter?: (updatedCharacter: ITeamMember) => void
  }
) {
  const statsElement = stats.map((stat: IMemberStat, index: number) => (
    <StatElement
      key={index}
      stat={stat}
      isCharacterPage={isCharacterPage}
      currentCharacter={currentCharacter}
      updateCurrentCharacter={updateCurrentCharacter} />
  ));

  const classes = isCharacterPage ? 'max-h-56 w-full max-w-48' : 'min-w-20 max-h-44';

  return (
    <div className={`flex flex-col justify-around bg-white dark:bg-zinc-900 border border-stone-400 rounded-md p-1 ${classes}`}>
      {statsElement}
    </div>
  );
}