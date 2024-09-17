import { useDispatch, useSelector } from "react-redux";
import { chosenCharacterIndexActions, RootStateType } from "../../store/store";

export default function CharacterSwitcher() {
  const dispatch = useDispatch();
  const team = useSelector((state: RootStateType) => state.team);
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndexSlice.chosenCharacterIndex);
  // const chosenCharacter = team.teamMembers[chosenCharacterIndex];
  const showPrev = chosenCharacterIndex > 0;
  const showNext = chosenCharacterIndex < team.teamMembers.length - 1;

  const handlePrev = () => {
    dispatch(chosenCharacterIndexActions.setCharacterIndex(chosenCharacterIndex - 1));
  };
  
  const handleNext = () => {
    dispatch(chosenCharacterIndexActions.setCharacterIndex(chosenCharacterIndex + 1));
  };

  return (<>
    <div className="flex text-sm">
      <button className={`${showPrev ? '' : 'hidden'} flex mr-auto `} onClick={handlePrev}>Prev</button>
      <button className={`${showNext ? '' : 'hidden'} flex ml-auto`} onClick={handleNext}>Next</button>
    </div>
    <span className="flex justify-center font-bold">Character</span>
  </>);
}