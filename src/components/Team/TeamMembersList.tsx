import { initialTeamMembersData } from "../../constants/initialTeam";
import TeamMember from "./TeamMember";

export default function TeamMembersList() {
  const teamMembers = initialTeamMembersData.map((member, index) => (
    <TeamMember key={index} member={member} />
  ));;

  return (
    <div className="h-full overflow-auto pb-32">
      <div className="flex flex-col gap-y-4">
        {teamMembers}
      </div>
    </div>
  );
}