export const statsShortNames = ['STR', 'AGI', 'MND'] as const;
export const statsLongNames = ['Strength', 'Agility', 'Mind'] as const;
export const statsColors = ['red', 'teal', 'sky'] as const;

export const StatsFullNames = {
  STR: 'Strength',
  AGI: 'Agility',
  MND: 'Mind'
}

export interface IMemberStat {
  statName: typeof statsShortNames[0]
    | typeof statsShortNames[1]
    | typeof statsShortNames[2];
  value: number;
}

export type IMemberStats = [
  { statName: typeof statsShortNames[0], value: number },
  { statName: typeof statsShortNames[1], value: number },
  { statName: typeof statsShortNames[2], value: number }
];