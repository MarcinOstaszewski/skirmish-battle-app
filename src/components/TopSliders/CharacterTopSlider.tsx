import { useSelector } from "react-redux";
import { RootStateType } from "../../store/store";
import TopSlider from "./TopSlider";
import Column from "../CommonElements/Column";

export default function CharacterTopSlider() {
  const chosenCharacterIndex = useSelector((state: RootStateType) => state.chosenCharacterIndexSlice.chosenCharacterIndex);
  const team = useSelector((state: RootStateType) => state.team);

  return (
    <TopSlider>
      <Column title="Character" content={`${team.teamMembers[chosenCharacterIndex].name}`} />
    </TopSlider>
  );
}