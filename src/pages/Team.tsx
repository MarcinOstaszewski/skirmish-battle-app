import TeamMembersList from "../components/Team/TeamMembersList";
import TeamTopSlider from "../components/Team/TeamTopSlider";

export default function Team() {
  return (
    <div className="h-full overflow-y-hidden">
      <TeamTopSlider />
      <TeamMembersList />
    </div>
  );
}