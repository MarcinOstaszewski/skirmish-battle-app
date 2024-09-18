import { useSelector } from "react-redux";
import { imgWidthClasses } from "../../constants/constants";
import { RootStateType } from "../../store/store";
import { useState } from "react";

export default function CharacterName ({name}: {name: string}) {
  const widthClassNames = imgWidthClasses[9];
  const [nameInputValue, setNameInputValue] = useState(name);

  const isEditedCharacter = useSelector((state: RootStateType) => state.isEditedCurrentCharacterSlice.isEditedCurrentCharacter);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(e.target.value);
  };

  return (
    <div className={`flex w-full ${widthClassNames} border border-stone-400 rounded-md font-bold overflow-x-auto`}>
      {isEditedCharacter ? (
        <>
          <input className="w-full bg-stone-100 text-stone-800 rounded-md py-1 px-2" type="text" value={nameInputValue} onChange={handleNameChange}/>
        </>
      ) : (
        <span className="py-1 px-2">{name}</span>
      )}
    </div>
  );
}
  