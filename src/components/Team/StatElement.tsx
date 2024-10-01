import { useSelector } from "react-redux";
import { getStatValues } from "../../helpers/getStatValues";
import { IMemberStat, ITeamMember } from "../../interfaces";
import { RootStateType } from "../../store/store";
import StatElementEditable from "./StatElementEditable";

export default function StatElement(
  {stat, isCharacterPage, currentCharacter, updateCurrentCharacter}: {
    stat: IMemberStat,
    isCharacterPage?: boolean,
    currentCharacter?: ITeamMember,
    updateCurrentCharacter?: (updatedCharacter: ITeamMember) => void
  }) {
  const isEditedCharacter = useSelector((state: RootStateType) => state.isEditedCurrentCharacter.isEditedCurrentCharacter);
  const showEditableStats = isEditedCharacter && currentCharacter && updateCurrentCharacter;
  const { shortName, longName, color, value } = getStatValues(stat);
  const showLongNames = isCharacterPage;
  const statNameSize = showLongNames ? 'text-lg' : 'text-md';
  const statValueSize = showLongNames ? 'text-5xl' : 'text-4xl';
  const commonClasses = `${statValueSize} ${color} px-1 rounded-md font-extrabold`;

  return (
    <div className="h-full flex justify-around items-center">
      <div className={`${statNameSize} ${color} rounded-md`}>
        <span className={showLongNames ? 'hidden' : ''}>{shortName}</span>
        <span className={showLongNames ? '' : 'hidden'}>{longName.toUpperCase()}</span>
      </div>
      {showEditableStats ? (
        <StatElementEditable stat={stat} currentCharacter={currentCharacter} updateCurrentCharacter={updateCurrentCharacter} />
      ) : ( 
        <span className={`${commonClasses}`}>{value}</span>
      )}
    </div>
  );
}