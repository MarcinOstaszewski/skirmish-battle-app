import { initialTeamMembers } from "../../constants/initialTeam";
import TeamMember from "./TeamMember";

export default function TeamMembersList() {
  const teamMembers = initialTeamMembers.map((member, index) => (
    <TeamMember key={index} member={member} />
  ));;

  return (
    <div className="h-full overflow-auto">
      <div className="flex flex-col gap-y-4 pb-8">
        {teamMembers}
      </div>
    </div>
  );
}