import { IAbility } from "../../interfaces";
import FeaturesListContainer from "./FeaturesListContainer";

export default function TeamMemberAbilitiesContainer(
  {abilities}: {abilities: IAbility[]}
) {
  const listOfAbilities = abilities.map((ability, index) => (
    <span className="flex text-nowrap h-fit font-bold bg-gradient-to-b from-cyan-200 to-cyan-300 dark:from-cyan-600 dark:to-cyan-900 dark:font-normal rounded-md p-1" key={index}>
      {ability.name}{ability?.level ? ` (${ability.level})` : ''}
    </span>
  ));

  return (
    <FeaturesListContainer title="Abilities">
      {listOfAbilities}
    </FeaturesListContainer>
  );
}