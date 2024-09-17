import { getStatValues } from "../../helpers/getStatValues";
import { IMemberStat } from "../../interfaces";

export default function StatElement(props: {stat: IMemberStat}) {
  const { shortName, longName, color, value } = getStatValues(props);

  return (
    <div className="h-full flex justify-around items-center">
      <div className={`text-md ${color} rounded-md relative`}>{shortName}
        <span className={`absolute hidden text-sm `}>{longName}</span>
      </div>
      <span className={`text-4xl ${color} px-1 rounded-md font-extrabold`}>{value}</span>
    </div>
  );
}