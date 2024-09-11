import Column from "../components/Flex/Column";
import TeamMember from "../components/TeamMember/TeamMember";
import { initialTeamMembers } from "../constants/initialTeam";

export default function Team() {
  const teamMembers = initialTeamMembers.map((member) => (
    <TeamMember key={member.name} member={member} />
  ));;

  return (
    <div className="h-full overflow-y-hidden">
      <div className="flex overflow-x-scroll mb-4">
        <Column title="Team" content="Cool Name" />
        <Column title="Points" content={330} />
        <Column title="Members" content={5} />
      </div>
      <div className="h-full overflow-y-scroll">
        <div className="flex flex-col gap-y-4 pb-8">
          {teamMembers}
        </div>
      </div>
    </div>
  );
}