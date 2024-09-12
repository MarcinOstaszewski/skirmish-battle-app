import NavLi from "./NavLi";

export default function Navbar() {
  return (
    <div className="fixed -bottom-0 w-full bg-emerald-600 text-white px-0 overflow-x-auto">
      <nav>
        <ul className="flex mx-4">
          <NavLi to="/" title="Home"/>
          <NavLi to="/team" title="Team"/>
        </ul>
      </nav>
    </div>
  );
}