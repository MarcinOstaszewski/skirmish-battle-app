import Header1 from "../CommonElements/Header1";
import OverflowAuto from "../CommonElements/OverflowAuto";
import ReadMoreSection from "../CommonElements/ReadMoreSection";

export default function Rules() {

  return (
    <OverflowAuto>
      <Header1>Basic scenario rules</Header1>
      <ReadMoreSection
        header={"What will you need."}
        content={[
          "Game is best played on a table about 60cm x 90cm, with 2+ teams of 4+ characters.",
          "For your characters you can use any miniatures you possess and like, they just should be of a similar scale. And with some help of imagination, you can even use simple tokens, like a chess set or any game pieces.",
        ]}
        isOpened={true} />
    </OverflowAuto>
  );
}