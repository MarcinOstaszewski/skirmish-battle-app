import { useSelector } from "react-redux";
import { RootStateType } from "../../store/store";
import TeamMemberImage from "../Team/TeamMemberImage";
import OverflowAuto from "../CommonElements/OverflowAuto";
import CharacterName from "./CharacterName";
import FullWidthFlex from "../CommonElements/FullWidthFlex";
import TeamMemberStats from "../Team/TeamMemberStats";
import TeamMemberAbilitiesContainer from "../Team/TeamMemberAbilitiesContainer";
import TeamMemberInventoryContainer from "../Team/TeamMemberInventoryContainer";

export default function CharacterPage() {
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndexSlice.chosenCharacterIndex);
  const team = useSelector((state: RootStateType) => state.team);
  const chosenCharacter = team.teamMembers[chosenCharacterIndex];
  const { abilities, inventory, imageUrl = '', name, stats } = chosenCharacter;

  return (
    <OverflowAuto>
      <FullWidthFlex classNames="h-56 flex-wrap gap-y-4">
        <FullWidthFlex classNames="gap-x-4">
          <TeamMemberImage imageUrl={imageUrl} isCharacterPage={true} name={name}/>
          <TeamMemberStats stats={stats} isCharacterPage={true} />
        </FullWidthFlex>
        <CharacterName name={name} />
        <TeamMemberAbilitiesContainer abilities={abilities} />
        <TeamMemberInventoryContainer inventory={inventory} />
      </FullWidthFlex>
    </OverflowAuto>
  );
}