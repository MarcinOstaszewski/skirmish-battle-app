export default function TeamMemberImage(
  { imageUrl, name }: { imageUrl: string | undefined, name: string }
) {
  return (
    <div className="relative flex flex-col min-w-20 min-h-44 max-h-44 align-middle">
      {imageUrl &&
        <img className="w-20 h-44 rounded-md object-cover" src={imageUrl} alt={`${name} team member image`} />
      }
      <span className="w-full absolute bg-black bg-opacity-30 text-white bottom-0 left-0 px-1">{name}</span>
    </div>
  );
}