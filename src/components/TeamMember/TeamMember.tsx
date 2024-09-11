import { ITeamMember } from "../../interfaces";
import StatColumn from "./StatColumn";

export default function TeamMember({ member }: { member: ITeamMember }) {
  const statsColumns = member.stats.map((stat) => (
    <StatColumn key={stat.statName} stat={stat} />
  ));
  return (
    <div className="flex p-1">
      <span className="flex flex-col size-20 align-middle rounded-md">
        {member.imageUrl &&
          <img className="size-16" src={member.imageUrl} alt="team member photo" />
        }
        <span>{member.name}</span>
      </span>
      <div className="font-bold">
        <div className="flex flex-col">
          <span>Str</span>
        </div>
      </div>
      <div className="font-bold">member.inventory</div>
    </div>
  );
}
