import copy from 'fast-copy';
import { getStatValues } from "../../helpers/getStatValues";
import { IMemberStat, ITeamMember } from "../../interfaces";
import { maxStatValue, minStatValue, statsShortNames } from "../../interfaces/memberStats";

export default function StatElementEditable(
  { stat, currentCharacter, updateCurrentCharacter }: {
    stat: IMemberStat,
    isCharacterPage?: boolean,
    currentCharacter: ITeamMember,
    updateCurrentCharacter: (updatedCharacter: ITeamMember) => void
  }
) {
  const { shortName, color, bgColor, value } = getStatValues(stat);
  const isFirst = shortName === statsShortNames[0];
  const isLast = shortName === statsShortNames[statsShortNames.length - 1];
  const updatedCharacter = copy(currentCharacter);
  const stats = updatedCharacter.stats;
  const statIndex = stats.findIndex((stat: any) => stat.statName === shortName);
  const isPrevStatMax = stats[statIndex - 1] && stats[statIndex - 1].value >= maxStatValue;
  const isNextStatMax = stats[statIndex + 1] && stats[statIndex + 1].value >= maxStatValue;
  const shouldHideUpArrow = isFirst || value <= minStatValue || isPrevStatMax;
  const shouldHideDownArrow = isLast || value <= minStatValue || isNextStatMax;

  const createStatTokens = (value: number) => {
    const tokens = [];
    for (let i = 0; i < value; i++) {
      tokens.push(
        <span key={i} className={`h-4 w-4 ${bgColor} rounded-md`}></span>
      )
    }
    return tokens;
  };

  const handleMoveToken = (up: boolean) => {
    stats[statIndex].value = value - 1;
    if (up) {
      stats[statIndex - 1].value = stats[statIndex - 1].value + 1;
    } else {
      stats[statIndex + 1].value = stats[statIndex + 1].value + 1;
    }
    updatedCharacter.stats = stats;
    updateCurrentCharacter(updatedCharacter);
  }
  
  return (
    <div className={`flex justify-center items-center`}>
      <button className={`${color} ${shouldHideUpArrow ? 'hidden' : ''}`} onClick={() => handleMoveToken(true)}>&#11180;</button>
      <div className={`flex justify-center items-center flex-wrap h-12 min-w-12 ${value > 4 ? 'max-w-14' : 'max-w-12'} gap-x-1`}>
        {createStatTokens(value)}
      </div>
      <button className={`${color} ${shouldHideDownArrow ? 'hidden' : ''}`} onClick={() => handleMoveToken(false)}>&#11183;</button>
    </div>
  )
}
