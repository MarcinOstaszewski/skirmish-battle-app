import { useSelector } from "react-redux";
import { RootStateType } from "../../store/store";
import TopSlider from "./TopSlider";
import Column from "../CommonElements/Column";

export default function TeamTopSlider() {
  const team = useSelector((state: RootStateType) => state.team);
  console.log(team, team.name, team.teamMembers, team.teamMembers.length);

  return (
    <TopSlider>
      <Column title="Team name" content="Lethal Mambas" />
      <Column title="Points" content={330} />
      <Column title="Members" content={team.teamMembers.length} />
    </TopSlider>
  );
}