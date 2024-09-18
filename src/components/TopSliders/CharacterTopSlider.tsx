import TopSlider from "./TopSlider";
import CharacterSwitcher from "../Character/CharacterSwitcher";
import Column from "../CommonElements/Column";
import EditCurrentCharacter from "../Character/EditCurrentCharacter";

export default function CharacterTopSlider() {

  return (
    <TopSlider>
      <CharacterSwitcher />
      <EditCurrentCharacter />
      
      <Column title="Upgrade" content="character" />
      <Column title="Add new" content="character" />
      <Column title="Remove" content="character" />
    </TopSlider>
  );
}