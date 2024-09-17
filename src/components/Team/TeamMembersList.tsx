import { initialTeamMembersData } from "../../constants/initialTeam";
import OverflowAuto from "../CommonElements/OverflowAuto";
import TeamMember from "./TeamMember";

export default function TeamMembersList() {
  const teamMembers = initialTeamMembersData.map((member, index) => (
    <TeamMember key={index} member={member} />
  ));;

  return (
    <OverflowAuto>
      <div className="flex flex-col gap-y-4">
        {teamMembers}
      </div>
    </OverflowAuto>
  );
}