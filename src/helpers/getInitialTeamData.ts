import { initialTeam } from "../constants/initialTeam";

export default function getInitialTeamData() {
  const savedTeamMembers = localStorage.getItem('teamMembers');
  const savedTeamName = localStorage.getItem('teamName');
  if (savedTeamMembers) {
    initialTeam.teamMembers = JSON.parse(savedTeamMembers);
  }
  if (savedTeamName) {
    initialTeam.name = savedTeamName;
  }

  return initialTeam;
}