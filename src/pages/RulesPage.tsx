import Rules from "../components/Rules/Rules";
import RulesTopSlider from "../components/TopSliders/RulesTopSlider";

export default function RulesPage() {
  return (
    <div className="h-full overflow-y-hidden">
      <RulesTopSlider />
      <Rules />
    </div>
  );
}