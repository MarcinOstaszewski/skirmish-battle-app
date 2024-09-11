import { IInventoryItem, IMemberStat, ITeamMemberAbility } from "./";

export interface ITeamMember {
  name: string;
  stats: IMemberStat[];
  level: number;
  abilities: ITeamMemberAbility[]; // TODO abilities as enum
  inventory: IInventoryItem[];
  imageUrl?: string;
}
