import { useDispatch, useSelector } from "react-redux";
import { chosenCharacterIndexActions, RootStateType } from "../../store/store";
import ColumnContainer from "../CommonElements/ColumnContainer";

export default function CharacterSwitcher() {
  const dispatch = useDispatch();
  const team = useSelector((state: RootStateType) => state.team);
  const isEditedCharacter = useSelector((state: RootStateType) => state.isEditedCurrentCharacter.isEditedCurrentCharacter);
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndex.chosenCharacterIndex);
  const showPrev = chosenCharacterIndex > 0;
  const showNext = chosenCharacterIndex < team.teamMembers.length - 1;

  const handlePrev = () => {
    dispatch(chosenCharacterIndexActions.setCharacterIndex(chosenCharacterIndex - 1));
  };
  
  const handleNext = () => {
    dispatch(chosenCharacterIndexActions.setCharacterIndex(chosenCharacterIndex + 1));
  };

  return (
    <ColumnContainer>
      <div className="flex text-sm min-h-5">
        <button
          className={`${showPrev ? '' : 'hidden'} flex underline disabled:opacity-40 mr-auto`}
          onClick={handlePrev}
          disabled={isEditedCharacter}
        >
          &#x27EA; Prev
        </button>
        <button
          className={`${showNext ? '' : 'hidden'} flex underline disabled:opacity-40 ml-auto`}
          onClick={handleNext}
          disabled={isEditedCharacter}
        >
          Next &#x27EB;
        </button>
      </div>
      <span className="flex justify-center font-bold">
        Character ({chosenCharacterIndex + 1})
      </span>
    </ColumnContainer>
  );
}