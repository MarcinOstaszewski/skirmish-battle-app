import { IInventoryItem } from "../../interfaces";
import FeaturesListContainer from "./FeaturesListContainer";

export default function TeamMemberInventoryContainer(
  {inventory}: {inventory: IInventoryItem[]}
) {
  const listOfInventory = inventory.map((inventory, index) => (
    <span className="flex text-nowrap h-fit font-bold bg-orange-200 rounded-md p-1" key={index}>
      {inventory.name}{inventory?.quantity ? ` (${inventory.quantity})` : ''}
    </span>
  ));

  return (
    <FeaturesListContainer title="Inventory">
      {listOfInventory}
    </FeaturesListContainer>
  );
}