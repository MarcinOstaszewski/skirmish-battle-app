export default function ImageResizeArrows(
  {handleChangeImageSize, imgWidthValue, isCharacterPage}:
  {handleChangeImageSize: (isGrow: boolean) => void, imgWidthValue: number, isCharacterPage: boolean}
) {
  const shouldShowLeftArrows = !isCharacterPage && imgWidthValue > 1;
  const shouldShowRightArrows = !isCharacterPage && imgWidthValue < 6;
  const commonClasses = 'absolute top-0 bg-white bg-opacity-20 px-1 pb-1 cursor-pointer opacity-60';

  return (<>
    {shouldShowLeftArrows && 
      <span className={`${commonClasses} rounded-br-md left-0`} onClick={() => handleChangeImageSize(false)}>&#x27EA;</span>
    }
    {shouldShowRightArrows && 
      <span className={`${commonClasses} rounded-bl-md right-0`} onClick={() => handleChangeImageSize(true)}>&#x27EB;</span>
    }
  </>);
}