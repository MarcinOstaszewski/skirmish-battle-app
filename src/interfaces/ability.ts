export interface ITeamMemberAbility {
  name: string;
  level: number;
}

export interface IAbility extends ITeamMemberAbility {
  description?: string;
}