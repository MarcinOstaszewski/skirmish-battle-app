import { useState } from "react";

export default function TeamMemberImage(
  { imageUrl, name }: { imageUrl: string | undefined, name: string }
) {
  const [imgWidthValue, setImgWidthValue] = useState(4);

  const imgWidthClasses: {[key: number]: string} = {
    1: 'max-w-8 min-w-8',
    2: 'max-w-20 min-w-20',
    3: 'max-w-24 min-w-24',
    4: 'max-w-32 min-w-32',
    5: 'max-w-36 min-w-36',
    6: 'max-w-44 min-w-44',
  };

  const handleChangeImageSize = (isGrow: boolean) => {
    console.log(isGrow, imgWidthValue);
    if (isGrow) {
      setImgWidthValue(imgWidthValue + 1);
    } else {
      setImgWidthValue(imgWidthValue - 1);
    }
  };

  const convertNameToLetterColumn = (letterArray: string[]) => {
    return letterArray.map((char: string) => {
      return char === ' ' ? <b>{char}<br /></b> : <b>{char}</b>
    })
  }

  const commonClasses = 'absolute top-0 bg-white bg-opacity-20 px-1 pb-1 cursor-pointer opacity-60';

  return (
    <div className={`relative flex flex-col ${imgWidthClasses[imgWidthValue]} min-h-44 max-h-44 align-middle`}>
      {imgWidthValue > 1 && <span className={`${commonClasses} rounded-br-md left-0`} onClick={() => handleChangeImageSize(false)}>&#x27EA;</span>}
      {imgWidthValue < 6 && <span className={`${commonClasses} rounded-bl-md right-0`} onClick={() => handleChangeImageSize(true)}>&#x27EB;</span>}
      {imageUrl && imgWidthValue > 1 && <>
        <img className={`h-44 ${imgWidthClasses[imgWidthValue]} rounded-md object-cover`} src={imageUrl} alt={`${name} team member image`} />
        </>
      }
      {imgWidthValue > 1 && <span className="absolute bottom-0 left-0 w-full max-h-18 overflow-y-auto bg-black bg-opacity-30 px-1">{name}</span>}
      {imgWidthValue === 1 && (
        <div className={`flex flex-col items-center ${imgWidthClasses[imgWidthValue]} h-full border border-stone-400 rounded-md font-bold leading-3 overflow-y-scroll py-2 pr-2`}>
          {convertNameToLetterColumn(name.split(''))}
        </div>
      )}
    </div>
  );
}