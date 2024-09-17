import { imgWidthClasses } from "../../constants/constants";

export default function CharacterName ({name}: {name: string}) {
  const widthClassNames = imgWidthClasses[9]

  return (
    <div className={`flex flex-col items-start ${widthClassNames} border border-stone-400 rounded-md font-bold leading-3 overflow-x-scroll p-2`}>
      {name}
    </div>
  );
}
  