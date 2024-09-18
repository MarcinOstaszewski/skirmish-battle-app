import { statsBgColorsClasses, statsColorsClasses, statsLongNames, statsShortNames } from "../interfaces/memberStats";

export function getStatValues (stat: any) {
  switch (stat?.statName) {
    case statsShortNames[0]:
      return {
        shortName: statsShortNames[0],
        longName: statsLongNames[0],
        color: statsColorsClasses[0],
        bgColor: statsBgColorsClasses[0],
        value: stat?.value
      }
    case statsShortNames[1]:
      return {
        shortName: statsShortNames[1],
        longName: statsLongNames[1],
        color: statsColorsClasses[1],
        bgColor: statsBgColorsClasses[1],
        value: stat?.value
      }
    case statsShortNames[2]:
      return {
        shortName: statsShortNames[2],
        longName: statsLongNames[2],
        color: statsColorsClasses[2],
        bgColor: statsBgColorsClasses[2],
        value: stat?.value,
      }
    default:
      return {
        shortName: '',
        longName: '',
        color: '',
        value: 0
      };
  }
}