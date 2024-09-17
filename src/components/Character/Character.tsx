import { useSelector } from "react-redux";
import TeamMemberImage from "../Team/TeamMemberImage";
import { RootStateType } from "../../store/store";

export default function CharacterPage() {
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndexSlice.chosenCharacterIndex);
  const team = useSelector((state: RootStateType) => state.team);

  const imageUrl = team.teamMembers[chosenCharacterIndex].imageUrl;

  return (
    <div className="h-full overflow-auto pb-32">
      <div className="flex w-full h-56">
        <TeamMemberImage imageUrl={imageUrl} name={'aaa'} isCharacterPage={true} />
      </div>
    </div>
  );
}