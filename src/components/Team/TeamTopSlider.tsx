import Column from "../Flex/Column";

export default function TeamTopSlider() {
  return (
    <div className="flex overflow-x-auto mb-4">
      <Column title="Team" content="Cool Name" />
      <Column title="Points" content={330} />
      <Column title="Members" content={5} />
    </div>
  );
}