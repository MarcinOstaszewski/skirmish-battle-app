export default function TeamMemberImage(
  { imageUrl, name }: { imageUrl: string | undefined, name: string }
) {
  return (
    <div className="relative flex flex-col min-w-24 min-h-32 align-middle">
      {imageUrl &&
        <img className="w-24 h-32 rounded-md" src={imageUrl} alt={`${name} team member image`} />
      }
      <span className="w-full absolute bg-black bg-opacity-30 text-white bottom-0 left-0 px-1">{name}</span>
    </div>
  );
}