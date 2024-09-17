import TopSlider from "./TopSlider";
import ColumnContainer from "../CommonElements/ColumnContainer";
import CharacterSwitcher from "../Character/CharacterSwitcher";
import Column from "../CommonElements/Column";

export default function CharacterTopSlider() {

  return (
    <TopSlider>
      <ColumnContainer>
        <CharacterSwitcher />
      </ColumnContainer>
      <Column title="Add new" content="Character" />
      <Column title="Edit current" content="Character" />
      <Column title="Upgrade" content="Character" />
    </TopSlider>
  );
}