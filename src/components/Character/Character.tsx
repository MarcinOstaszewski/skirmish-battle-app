import { useSelector } from "react-redux";
import { RootStateType } from "../../store/store";
import TeamMemberImage from "../Team/TeamMemberImage";
import OverflowAuto from "../CommonElements/OverflowAuto";

export default function CharacterPage() {
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndexSlice.chosenCharacterIndex);
  const team = useSelector((state: RootStateType) => state.team);

  const imageUrl = team.teamMembers[chosenCharacterIndex].imageUrl;

  return (
    <OverflowAuto>
      <div className="flex w-full h-56">
        <TeamMemberImage imageUrl={imageUrl} name={'aaa'} isCharacterPage={true} />
      </div>
    </OverflowAuto>
  );
}