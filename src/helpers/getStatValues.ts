import { statsColorsClasses, statsLongNames, statsShortNames } from "../interfaces/memberStats";

export function getStatValues (props: any) {
  switch (props?.stat?.statName) {
    case statsShortNames[0]:
      return {
        shortName: statsShortNames[0],
        longName: statsLongNames[0],
        color: statsColorsClasses[0],
        value: props?.stat?.value
      }
    case statsShortNames[1]:
      return {
        shortName: statsShortNames[1],
        longName: statsLongNames[1],
        color: statsColorsClasses[1],
        value: props?.stat?.value
      }
    case statsShortNames[2]:
      return {
        shortName: statsShortNames[2],
        longName: statsLongNames[2],
        color: statsColorsClasses[2],
        value: props?.stat?.value,
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