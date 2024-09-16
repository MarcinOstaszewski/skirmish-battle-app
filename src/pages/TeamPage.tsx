import TeamMembersList from "../components/Team/TeamMembersList";
import TeamTopSlider from "../components/TopSliders/TeamTopSlider";

export default function TeamPage() {
  return (
    <div className="h-full overflow-y-hidden">
      <TeamTopSlider />
      <TeamMembersList />
    </div>
  );
}