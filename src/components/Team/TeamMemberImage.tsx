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

  const commonClasses = 'absolute top-0 bg-white bg-opacity-10 px-1 pb-1 cursor-pointer';

  return (
    <div className={`relative flex flex-col ${imgWidthClasses[imgWidthValue]} min-h-44 max-h-44 align-middle`}>
      {imgWidthValue > 1 && <span className={`${commonClasses} rounded-br-md left-0`} onClick={() => handleChangeImageSize(false)}>&#x27EA;</span>}
      {imgWidthValue < 6 && <span className={`${commonClasses} rounded-bl-md right-0`} onClick={() => handleChangeImageSize(true)}>&#x27EB;</span>}
      {imageUrl && imgWidthValue > 1 && <>
        <img className={`h-44 ${imgWidthClasses[imgWidthValue]} rounded-md object-cover`} src={imageUrl} alt={`${name} team member image`} />
        </>
      }
      {imgWidthValue > 1 && <span className="w-full absolute bg-black bg-opacity-30 text-white bottom-0 left-0 px-1">{name}</span>}
      {imgWidthValue === 1 && (
        <span className={`${imgWidthClasses[imgWidthValue]} h-full rounded-md bg-stone-900 text-white font-bold flex justify-center py-2 px-3 leading-4`}>
          {name.replace(/[ ]/g, '-').split('').join(' ')}
        </span>
      )}
    </div>
  );
}