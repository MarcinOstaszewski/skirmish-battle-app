import { useState } from "react";
import TeamMemberName from "./TeamMemberName";
import ImageResizeArrows from "./ImageResizeArrows";
import { imgWidthClasses } from "../../constants/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chosenCharacterIndexActions } from "../../store/store";

export default function TeamMemberImage(
  { imageUrl, name, isCharacterPage = false, index }:
  {
    imageUrl: string | undefined,
    name?: string,
    isCharacterPage?: boolean
    index?: number
  }
) {
  const dispatch = useDispatch();
  const initialWidth = isCharacterPage ? 8 : 4;
  const imageHeightClass = isCharacterPage ? 'h-56' : 'h-44';
  const [imgWidthValue, setImgWidthValue] = useState(initialWidth);

  const handleChangeImageSize = (isGrow: boolean) => {
    if (isGrow) {
      setImgWidthValue(imgWidthValue + 1);
    } else {
      setImgWidthValue(imgWidthValue - 1);
    }
  };

  const handleImageClick = () => {
    dispatch(chosenCharacterIndexActions.setCharacterIndex(index));
  }

  const shouldShowImage = imageUrl && imgWidthValue > 1;
  const isNameHorizontal = imgWidthValue > 1;
  const classNames = `${imgWidthClasses[imgWidthValue]} ${imageHeightClass}`;

  return <Link to={`/character`} onClick={handleImageClick}>
    <div className={`relative flex flex-col ${classNames}`}>
      <ImageResizeArrows handleChangeImageSize={handleChangeImageSize} imgWidthValue={imgWidthValue} isCharacterPage={isCharacterPage} />
      {shouldShowImage &&
        <img className={`${classNames} rounded-md object-cover`} src={imageUrl} alt={`${name} team member image`} />
      }
      {!isCharacterPage && name &&
        <TeamMemberName
          name={name}
          isNameHorizontal={isNameHorizontal}
          classNames={classNames}
        />
      }
    </div>
  </Link>
}