export const statsShortNames = ['STR', 'AGI', 'MND'] as const;
export const statsLongNames = ['Strength', 'Agility', 'Mind'] as const;
export const statsColorsClasses = ['text-red-500', 'text-teal-500', 'text-sky-500'] as const;
export const statsBgColorsClasses = ['bg-red-500', 'bg-teal-500', 'bg-sky-500'] as const;
export const StatsFullNames = {
  STR: 'Strength',
  AGI: 'Agility',
  MND: 'Mind'
}

type StatShortName = typeof statsShortNames[number];

export interface IMemberStat {
  statName: StatShortName;
  value: number;
}

export type IMemberStats = [
  { statName: typeof statsShortNames[0], value: number },
  { statName: typeof statsShortNames[1], value: number },
  { statName: typeof statsShortNames[2], value: number }
];

export const maxStatValue = 5;
export const minStatValue = 2;