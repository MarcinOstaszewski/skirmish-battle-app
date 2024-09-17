export default function TeamMemberName(
  { name, isNameHorizontal, classNames = '' }:
  { name: string, isNameHorizontal?: boolean, classNames?: string }
) {
  
  const convertNameToLetterColumn = (letterArray: string[]) => {
    return letterArray.map((char: string, index) => {
      return char === ' ' ? <b key={index}>{char}<br /></b> : <b key={index}>{char}</b>
    })
  }

  return (isNameHorizontal ? (
      <span className="absolute bottom-0 left-0 w-full max-h-18 overflow-y-auto bg-black bg-opacity-30 px-1">{name}</span>
    ) : (
      <div className={`flex flex-col items-center ${classNames} border border-stone-400 rounded-md font-bold leading-3 overflow-y-scroll py-2 pr-2`}>
        {convertNameToLetterColumn(name.split(''))}
      </div>
    )
  );
}