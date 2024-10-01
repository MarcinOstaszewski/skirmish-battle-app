import { useDispatch, useSelector } from "react-redux";
import { currentCharacterDataActions, RootStateType } from "../../store/store";
import TeamMemberImage from "../Team/TeamMemberImage";
import OverflowAuto from "../CommonElements/OverflowAuto";
import CharacterName from "./CharacterName";
import FullWidthFlex from "../CommonElements/FullWidthFlex";
import TeamMemberStats from "../Team/TeamMemberStats";
import TeamMemberAbilitiesContainer from "../Team/TeamMemberAbilitiesContainer";
import TeamMemberInventoryContainer from "../Team/TeamMemberInventoryContainer";
import { ITeamMember } from "../../interfaces";

export default function CharacterPage() {
  const dispatch = useDispatch();
  const team = useSelector((state: RootStateType) => state.team);
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndex.chosenCharacterIndex);
  const currentCharacterFromStore = useSelector((state: RootStateType) => state.currentCharacter.currentCharacterData);
  const chosenCharacter = team.teamMembers[chosenCharacterIndex];
  const currentCharacter = Object.keys(currentCharacterFromStore).length ? currentCharacterFromStore : chosenCharacter;
  
  const { abilities, inventory, imageUrl = '', name, stats } = currentCharacter;
  
  const updateCurrentCharacter = (updatedCharacter: ITeamMember) => {
    dispatch(currentCharacterDataActions.setCurrentCharacterData(updatedCharacter));
  }

  return (
    <OverflowAuto>
      <FullWidthFlex classNames="h-56 flex-wrap gap-y-4">
        <FullWidthFlex classNames="gap-x-4">
          <TeamMemberImage
            imageUrl={imageUrl}
            isCharacterPage={true}
            name={name}
          />
          <TeamMemberStats
            stats={stats}
            isCharacterPage={true}
            currentCharacter={currentCharacter}
            updateCurrentCharacter={updateCurrentCharacter}
          />
        </FullWidthFlex>
        <CharacterName
          name={name}
          currentCharacter={currentCharacter}
          updateCurrentCharacter={updateCurrentCharacter}
        />
        <TeamMemberAbilitiesContainer abilities={abilities} />
        <TeamMemberInventoryContainer inventory={inventory} />
      </FullWidthFlex>
    </OverflowAuto>
  );
}