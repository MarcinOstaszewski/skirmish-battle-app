import { IInventoryItem, ITeamMemberAbility } from "../../interfaces";
import TeamMemberDetailsContainer from "./TeamMemberDetailsContainer";

export default function TeamMemberDetails({abilities, inventory}: {abilities: ITeamMemberAbility[], inventory: IInventoryItem[]}) {
  const containerClasses = "flex flex-grow flex-wrap h-full w-full font-sm border border-stone-300 rounded-md p-1 gap-1 overflow-auto";

  return (
    <div className="flex flex-col items-stretch gap-2 flex-grow text-xs">
      <TeamMemberDetailsContainer items={abilities} isAbilities={true} />
      <TeamMemberDetailsContainer items={inventory} isAbilities={false} />
      <div className={containerClasses}>
        <strong>Inventory</strong>
      </div>
    </div>
  );
}