import { useSelector } from "react-redux";
import { imgWidthClasses } from "../../constants/constants";
import { RootStateType } from "../../store/store";
import { ITeamMember } from "../../interfaces";
import { current } from "@reduxjs/toolkit";

export default function CharacterName (
  {name, currentCharacter, updateCurrentCharacter}:
  {
    name: string, 
    currentCharacter: ITeamMember,
    updateCurrentCharacter: (updatedCharacter: ITeamMember) => void
  }
) {
  const widthClassNames = imgWidthClasses[9];
  
  const nameInputValue = currentCharacter.name;
  const isEditedCharacter = useSelector((state: RootStateType) => state.isEditedCurrentCharacter.isEditedCurrentCharacter);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCharacter = {
      ...currentCharacter,
      name: e.target.value
    };
    updateCurrentCharacter(updatedCharacter);
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
  