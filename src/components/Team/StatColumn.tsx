import { getStatValues } from "../../helpers/getStatValues";

export default function StatColumn(props: any) {
  const { shortName, longName, color, value } = getStatValues(props);

  const shortNameClasses = `text-md text-${color}-500 rounded-md relative`;
  const valueClasses = `text-5xl text- text-${color}-500 px-1 rounded-md font-extrabold`;

  return (
    <div className="h-full flex flex-col justify-around items-center">
      <div className={shortNameClasses}>{shortName}
        <span className={`absolute hidden text-sm `}>{longName}</span>
      </div>
      <span className={valueClasses}>{value}</span>
    </div>
  );
}