import { useSelector } from "react-redux";
import { routesList } from "../main";
import NavLi from "./NavLi";
import { RootStateType } from "../store/store";

export default function Navbar() {
  const isCharachterEdited = useSelector((state: RootStateType) => state.isEditedCurrentCharacter.isEditedCurrentCharacter);
  const routes = routesList.map(({path, title}: {path: string, title: string}) => {
    return (
      <NavLi key={path} to={path} title={title}/>
    );
  });

  const bottomBarColors = isCharachterEdited ? 'from-stone-600 to-stone-800 text-stone-500' : 'from-emerald-600 to-cyan-800';

  return (
    <div className={`fixed -bottom-0 w-full max-w-4xl bg-gradient-to-b ${bottomBarColors} px-0 overflow-x-auto rounded-t-md`} >
      <nav className={isCharachterEdited ? 'pointer-events-none' : ''}>
        <ul className="flex mx-4">
          {routes}
        </ul>
      </nav>
    </div>
  );
}