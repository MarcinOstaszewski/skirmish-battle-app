import { ITeamMember } from "../../interfaces";
import TeamMemberDetails from "./TeamMemberDetails";
import TeamMemberImage from "./TeamMemberImage";
import TeamMemberStats from "./TeamMemberStats";

export default function TeamMember({ member }: { member: ITeamMember }) {
  const { imageUrl, name, stats, abilities, inventory } = member;

  return (
    <div className="flex gap-2">
      <TeamMemberImage imageUrl={imageUrl} name={name} />
      <TeamMemberStats stats={stats} />
      <TeamMemberDetails abilities={abilities} inventory={inventory}/>
    </div>
  );
}
