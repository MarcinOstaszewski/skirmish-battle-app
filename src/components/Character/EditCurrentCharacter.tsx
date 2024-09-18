
import { useDispatch, useSelector } from "react-redux";
import { isEditedCurrentCharacterActions, RootStateType } from "../../store/store";
import ColumnContainer from "../CommonElements/ColumnContainer";

export default function EditCurrentCharacter() {
  const dispatch = useDispatch();
  const isEditedCharacter = useSelector((state: RootStateType) => state.isEditedCurrentCharacterSlice.isEditedCurrentCharacter);

  const handleEditCharacter = () => {
    dispatch(isEditedCurrentCharacterActions.setIsEditedCurrentCharachter(true));
  }

  const handleSaveChanges = () => {
    dispatch(isEditedCurrentCharacterActions.setIsEditedCurrentCharachter(false));
  }

  const handleRejectChanges = () => {
    dispatch(isEditedCurrentCharacterActions.setIsEditedCurrentCharachter(false));
  }

  return (
    <ColumnContainer shouldChangeBG={isEditedCharacter}>
      {isEditedCharacter ? (
        <span className="flex justify-between text-sm">
          <button className="underline" onClick={handleRejectChanges}>Reject</button>
          <button className="underline" onClick={handleSaveChanges}>Save</button>
        </span>
      ) : (
        <span className="flex justify-center text-sm underline" onClick={handleEditCharacter}>Edit</span>
      )}
      <span className="flex justify-center font-bold">{ isEditedCharacter ? 'all changes' : 'Character'}</span>
    </ColumnContainer>
  );
}