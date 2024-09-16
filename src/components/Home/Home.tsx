import Header1 from "../CommonElements/Header1";
import ReadMoreSection from "../CommonElements/ReadMoreSection";
import HomeTopSlider from "../TopSliders/HomeTopSlider";
import InlineRoute from "../CommonElements/InlineRouting";

export default function Home() {
  return (
    <>
      <HomeTopSlider />
      <div className="">
        <Header1>Skirmish Battle App</Header1>

        <ReadMoreSection 
          header={<>It is a custom team builder for a simple, action-packed tabletop skirmish battle game.</>}
          content={[
            "It is designed to quickly build a team and start playing first scenario. At the same time it gives a lot of options to build and develop individual team members for more advanced players.",
            "All your changes are saved in the browser's memory, so you can continue building your team later.",
          ]} />

        <ReadMoreSection 
          header={<>You can check the very simple rules and explanations in the <InlineRoute to="/rules" title="Rules" /> page.</>}
          content={[
            "Basic rules are simplified to absolute minimum, so the first game can be finished in less then 2 hours. At the same, new rules can easily be added to gradually make the game more complex and interesting.",
          ]} />

        <p>The sample Team is already configured, to make the process even faster, but all members' characteristics can be modified in <InlineRoute to="/team" title="Team" /> and <InlineRoute to="/character/:0" title="Character" /> pages.</p>

        <p className="mt-8 text-xs">The app is built with React, TypeScript, Tailwind CSS, and Redux Toolkit.</p>
      </div>
    </>
  );
}