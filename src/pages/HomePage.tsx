import Home from "../components/Home/Home";
import HomeTopSlider from "../components/TopSliders/HomeTopSlider";

export default function HomePage() {

  return (
    <div className="h-full overflow-y-hidden">
      <HomeTopSlider />
      <Home />
    </div>
  );
}
