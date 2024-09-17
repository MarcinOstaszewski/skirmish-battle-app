import { useState } from "react";
import TeamMemberName from "./TeamMemberName";
import ImageResizeArrows from "./ImageResizeArrows";

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
    if (isGrow) {
      setImgWidthValue(imgWidthValue + 1);
    } else {
      setImgWidthValue(imgWidthValue - 1);
    }
  };

  const shouldShowImage = imageUrl && imgWidthValue > 1;
  const showImage = imgWidthValue > 1;

  return (
    <div className={`relative flex flex-col ${imgWidthClasses[imgWidthValue]} ${imageHeightClass} align-middle`}>
      <ImageResizeArrows handleChangeImageSize={handleChangeImageSize} imgWidthValue={imgWidthValue} isCharacterPage={isCharacterPage} />
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