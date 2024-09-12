import { IInventoryItem, ITeamMemberAbility } from "./";
import { IMemberStats } from "./memberStats";

export interface ITeamMember {
  name: string;
  stats: IMemberStats;
  level: number;
  abilities: ITeamMemberAbility[]; // TODO abilities as enum
  inventory: IInventoryItem[]; // TODO inventory as enum
  imageUrl?: string;
}
