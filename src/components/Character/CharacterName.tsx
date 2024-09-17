import { imgWidthClasses } from "../../constants/constants";

export default function CharacterName ({name}: {name: string}) {
  const widthClassNames = imgWidthClasses[9]

  return (
    <div className={`flex ${widthClassNames} border border-stone-400 rounded-md font-bold overflow-x-auto p-1`}>
      {name}
    </div>
  );
}
  