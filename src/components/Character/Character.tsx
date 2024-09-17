import { useSelector } from "react-redux";
import { RootStateType } from "../../store/store";
import TeamMemberImage from "../Team/TeamMemberImage";
import OverflowAuto from "../CommonElements/OverflowAuto";
import CharacterName from "./CharacterName";
import FullWidthFlex from "../CommonElements/FullWidthFlex";

export default function CharacterPage() {
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndexSlice.chosenCharacterIndex);
  const team = useSelector((state: RootStateType) => state.team);

  const imageUrl = team.teamMembers[chosenCharacterIndex].imageUrl;
  const characterName = team.teamMembers[chosenCharacterIndex].name;

  return (
    <OverflowAuto>
      <FullWidthFlex classNames="h-56 flex-wrap gap-y-4">
        <FullWidthFlex>
          <TeamMemberImage imageUrl={imageUrl} isCharacterPage={true} />
        </FullWidthFlex>
        <FullWidthFlex>
          <CharacterName
            name={characterName}
          />
        </FullWidthFlex>
      </FullWidthFlex>
    </OverflowAuto>
  );
}