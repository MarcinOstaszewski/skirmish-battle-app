import CharacterTopSlider from "../components/TopSliders/CharacterTopSlider";
import Character from "../components/Character/Character";

export default function CharacterPage() {

  return (
    <div className="h-full overflow-y-hidden">
      <CharacterTopSlider />
      <Character />
    </div>
  );
}