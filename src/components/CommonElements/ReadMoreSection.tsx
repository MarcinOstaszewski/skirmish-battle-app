import { useState } from "react";

export default function ReadMoreSection(
  { header, content, isOpened = false }: { header: string |  React.ReactNode, content: string[] | React.ReactNode[], isOpened?: boolean }

) {
  const paragraphs = content.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  });

  const [isOpen, setIsOpen] = useState(isOpened);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <section>
      <div className="header mt-1 mb-4">{header}
        <div className="inline" onClick={toggleReadMore}>
          <span className={`text-xs text-sky-500 ml-2 ${isOpen ? 'hidden' : ''}`}>Read more &or;</span>
          <span className={`text-xs text-sky-500 ml-2 ${isOpen ? '' : 'hidden'}`}>Read less &and;</span>
        </div>
        <div className={`text-sm my-2 ml-3 mr-0 ${isOpen ? '' : 'hidden'}`}>
          {paragraphs}
        </div>
      </div>
    </section>
  );
}