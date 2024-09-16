import { routesList } from "../main";
import NavLi from "./NavLi";

export default function Navbar() {
  const routes = routesList.map(({path, title}: {path: string, title: string}) => {
    return (
      <NavLi key={path} to={path} title={title}/>
    );
  });

  return (
    <div className="fixed -bottom-0 w-full bg-gradient-to-b from-emerald-600 to-cyan-800 px-0 overflow-x-auto rounded-t-md">
      <nav>
        <ul className="flex mx-4">
          {routes}
        </ul>
      </nav>
    </div>
  );
}