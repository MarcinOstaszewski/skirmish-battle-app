import { useState } from "react";
import TeamMemberName from "./TeamMemberName";

export default function TeamMemberImage(
  { imageUrl, name, isCharacterPage = false }: { imageUrl: string | undefined, name: string, isCharacterPage?: boolean }
) {
  const initialWidth = isCharacterPage ? 9 : 4;
  const imageHeightClass = isCharacterPage ? 'h-56' : 'h-44';
  const [imgWidthValue, setImgWidthValue] = useState(initialWidth);

  const imgWidthClasses: {[key: number]: string} = {
    1: 'max-w-8 min-w-8',
    2: 'max-w-20 min-w-20',
    3: 'max-w-24 min-w-24',
    4: 'max-w-32 min-w-32',
    5: 'max-w-36 min-w-36',
    6: 'max-w-44 min-w-44',
    9: 'max-w-48 min-w-48',
  };

  const handleChangeImageSize = (isGrow: boolean) => {
    console.log(isGrow, imgWidthValue);
    if (isGrow) {
      setImgWidthValue(imgWidthValue + 1);
    } else {
      setImgWidthValue(imgWidthValue - 1);
    }
  };

  const shouldShowLeftArrows = !isCharacterPage && imgWidthValue > 1;
  const shouldShowRightArrows = !isCharacterPage && imgWidthValue < 6;
  const shouldShowImage = imageUrl && imgWidthValue > 1;
  const showImage = imgWidthValue > 1;

  const commonClasses = 'absolute top-0 bg-white bg-opacity-20 px-1 pb-1 cursor-pointer opacity-60';

  return (
    <div className={`relative flex flex-col ${imgWidthClasses[imgWidthValue]} ${imageHeightClass} align-middle`}>
      {shouldShowLeftArrows && 
        <span className={`${commonClasses} rounded-br-md left-0`} onClick={() => handleChangeImageSize(false)}>&#x27EA;</span>
      }
      {shouldShowRightArrows && 
        <span className={`${commonClasses} rounded-bl-md right-0`} onClick={() => handleChangeImageSize(true)}>&#x27EB;</span>
      }
      {shouldShowImage &&
        <img className={`${imageHeightClass} ${imgWidthClasses[imgWidthValue]} rounded-md object-cover`} src={imageUrl} alt={`${name} team member image`} />
      }
      {!isCharacterPage && 
        <TeamMemberName
          name={name}
          isCharacterPage={isCharacterPage}
          showImage={showImage}
          imgWidthClasses={imgWidthClasses[imgWidthValue]}
          imgWidthValue={imgWidthValue}
          imageHeightClass={imageHeightClass}
        />
      }
    </div>
  );
}