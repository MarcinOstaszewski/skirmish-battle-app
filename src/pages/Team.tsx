import Column from "../components/Flex/Column";

export default function Team() {
  return (
    <div>
      <div className="flex overflow-x-scroll mb-4">
        <Column title="Team" content="Cool Name" />
        <Column title="Points" content={330} />
        <Column title="Members" content={5} />
      </div>
      <div className="flex overflow-y-scroll mb-4">
        <p>List of team members will show up here.</p>
      </div>
    </div>
  );
}