export enum TeamMemeberStats {
  STR = 'Strength',
  AGI = 'Agility',
  MND = 'Mind'
}

export interface IMemberStat {
  statName: keyof typeof TeamMemeberStats;
  value: number;
}

// export interface IMemberStats {
//   stats: IMemberStat[];
// }