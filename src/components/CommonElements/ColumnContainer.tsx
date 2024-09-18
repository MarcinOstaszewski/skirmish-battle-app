export default function ColumnContainer(
  { children, handleClick, shouldChangeBG = false }: { children: React.ReactNode, handleClick?: () => void, shouldChangeBG?: boolean }
) {

  const bgGradientColors = shouldChangeBG ? 'from-orange-700 to-red-900' : 'from-emerald-600 to-cyan-800';

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col mr-2 min-w-max bg-gradient-to-b ${bgGradientColors} py-1 px-3 rounded-md`}>
      {children}
    </div>
  );
}
