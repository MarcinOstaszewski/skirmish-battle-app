export default function TeamMemberName(
  { name, showImage, imgWidthClasses, imgWidthValue, imageHeightClass }:
  { name: string, isCharacterPage: boolean, showImage: boolean, imgWidthClasses: string, imgWidthValue: number, imageHeightClass: string }
) {
  
  const convertNameToLetterColumn = (letterArray: string[]) => {
    return letterArray.map((char: string) => {
      return char === ' ' ? <b>{char}<br /></b> : <b>{char}</b>
    })
  }

  return (showImage ? (
      <span className="absolute bottom-0 left-0 w-full max-h-18 overflow-y-auto bg-black bg-opacity-30 px-1">{name}</span>
    ) : (
      <div className={`flex flex-col items-center ${imgWidthClasses[imgWidthValue]} ${imageHeightClass} border border-stone-400 rounded-md font-bold leading-3 overflow-y-scroll py-2 pr-2`}>
        {convertNameToLetterColumn(name.split(''))}
      </div>
    )
  );
}