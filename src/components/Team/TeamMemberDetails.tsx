import { IInventoryItem, ITeamMemberAbility } from "../../interfaces";
import TeamMemberAbilitiesContainer from "./TeamMemberAbilitiesContainer";
import TeamMemberInventoryContainer from "./TeamMemberInventoryContainer";

export default function TeamMemberDetails({abilities, inventory}: {abilities: ITeamMemberAbility[], inventory: IInventoryItem[]}) {

  return (
    <div className="flex flex-col max-h-44 items-stretch gap-2 flex-grow text-xs">
      <TeamMemberAbilitiesContainer abilities={abilities} />
      <TeamMemberInventoryContainer inventory={inventory} />
    </div>
  );
}