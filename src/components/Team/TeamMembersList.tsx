import { useSelector } from "react-redux";
import { initialTeamMembersData } from "../../constants/initialTeam";
import OverflowAuto from "../CommonElements/OverflowAuto";
import TeamMember from "./TeamMember";
import { RootStateType } from "../../store/store";

export default function TeamMembersList() {
  const teamMembersData = useSelector((state: RootStateType) => state.team.teamMembers);

  const teamMembers = teamMembersData.map((member, index) => (
    <TeamMember key={index} member={member} index={index} />
  ));;

  return (
    <OverflowAuto>
      <div className="flex flex-col gap-y-4">
        {teamMembers}
      </div>
    </OverflowAuto>
  );
}