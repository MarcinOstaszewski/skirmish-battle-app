import { getStatValues } from "../../helpers/getStatValues";
import { IMemberStat } from "../../interfaces";

export default function StatElement(props: {stat: IMemberStat, isCharacterPage?: boolean}) {
  const { shortName, longName, color, value } = getStatValues(props);

  const showLongNames = props.isCharacterPage;
  const statNameSize = showLongNames ? 'text-lg' : 'text-md';
  const statValueSize = showLongNames ? 'text-5xl' : 'text-4xl';

  return (
    <div className="h-full flex justify-around items-center">
      <div className={`${statNameSize} ${color} rounded-md`}>
        <span className={showLongNames ? 'hidden' : ''}>{shortName}</span>
        <span className={showLongNames ? '' : 'hidden'}>{longName.toUpperCase()}</span>
      </div>
      <span className={`${statValueSize} ${color} px-1 rounded-md font-extrabold`}>{value}</span>
    </div>
  );
}