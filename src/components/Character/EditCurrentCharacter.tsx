import copy from "fast-copy";
import { useDispatch, useSelector } from "react-redux";
import { currentCharacterDataActions, isEditedCurrentCharacterActions, RootStateType, teamActions } from "../../store/store";
import ColumnContainer from "../CommonElements/ColumnContainer";
import { ITeamMember } from "../../interfaces";

export default function EditCurrentCharacter() {
  const dispatch = useDispatch();
  const isEditedCharacter = useSelector((state: RootStateType) => state.isEditedCurrentCharacter.isEditedCurrentCharacter);
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndex.chosenCharacterIndex);
  const updatedCharacter = useSelector((state: RootStateType) => state.currentCharacter.currentCharacterData);
  const team = useSelector((state: RootStateType) => state.team);
  const teamMembersCopy = copy(team.teamMembers);
  
  const leaveEditingUpdateTeamAndCurrentCharacter = (teamMembersData: ITeamMember[]) => {
    dispatch(teamActions.updateTeamMembers(teamMembersData));
    dispatch(isEditedCurrentCharacterActions.setIsEditedCurrentCharacter(false));
    dispatch(currentCharacterDataActions.setCurrentCharacterData({}));
  };
  
  const handleEditCharacter = () => {
    dispatch(isEditedCurrentCharacterActions.setIsEditedCurrentCharacter(true));
    dispatch(currentCharacterDataActions.setCurrentCharacterData(copy(team.teamMembers[chosenCharacterIndex])));
  }


  const handleSaveChanges = () => {
    teamMembersCopy[chosenCharacterIndex] = updatedCharacter;
    leaveEditingUpdateTeamAndCurrentCharacter(teamMembersCopy);
  }

  const handleRejectChanges = () => {
    leaveEditingUpdateTeamAndCurrentCharacter(team.teamMembers);
  }

  return (
    <ColumnContainer shouldChangeBG={isEditedCharacter}>
      {isEditedCharacter ? (
        <span className="flex justify-between text-sm">
          <button className="underline" onClick={handleRejectChanges}>Reject</button>
          <button className="underline" onClick={handleSaveChanges}>Save</button>
        </span>
      ) : (
        <button className="flex justify-center text-sm underline" onClick={handleEditCharacter}>Edit</button>
      )}
      <span className="flex justify-center font-bold">{ isEditedCharacter ? 'all changes' : 'character'}</span>
    </ColumnContainer>
  );
}