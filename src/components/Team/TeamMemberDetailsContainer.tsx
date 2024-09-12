import { IInventoryItem, ITeamMemberAbility } from "../../interfaces";

type IItem = ITeamMemberAbility | IInventoryItem;
type IItems = IItem[];

export default function TeamMemberDetailsContainer(
  props: {items: IItems, isAbilities: boolean}
) {

  const { items, isAbilities } = props;
  console.log(items, isAbilities);
  // let title, value;

  // const abilitiesList = props.items.forEach((element: IItem) => {
  //   console.log('element', element);
  //   // if (element?.quantity) {
  //   //   title = element.name;
  //   //   value = element.quantity;
  //   // }
  //   // value = isAbilities ? element?.level || element?.quantity;
  //   // return (
  //   //   <span className="flex text-nowrap h-fit p-1 bg-lime-400 rounded-md" key={index}>
  //   //     {element.name}{element?.level ? ` (${element.level})` : ''}
  //   //   </span>
  //   // )
  // });

  return (
    <div className="flex flex-grow flex-wrap h-full w-full font-sm border border-stone-300 rounded-md p-1 gap-1 overflow-auto">
        <strong className="bg-lime-200 rounded-md p-1">Abilities:</strong>
        {/* {abilitiesList} */}
      </div>
  );
}