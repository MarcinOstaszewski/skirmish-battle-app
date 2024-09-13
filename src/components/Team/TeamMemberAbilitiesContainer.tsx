import { IAbility } from "../../interfaces";
import FeaturesListContainer from "./FeaturesListContainer";

export default function TeamMemberAbilitiesContainer(
  {abilities}: {abilities: IAbility[]}
) {
  const listOfAbilities = abilities.map((ability, index) => (
    <span className="flex text-nowrap h-fit font-bold bg-lime-200 rounded-md p-1" key={index}>
      {ability.name}{ability?.level ? ` (${ability.level})` : ''}
    </span>
  ));

  return (
    <FeaturesListContainer title="Abilities">
      {listOfAbilities}
    </FeaturesListContainer>
  );
}