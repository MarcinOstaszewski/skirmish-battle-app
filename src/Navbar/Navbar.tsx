import NavLi from "./NavLi";

export default function Navbar() {
  return (
    <div className="fixed -bottom-0 w-full bg-gradient-to-b from-emerald-600 to-cyan-800 px-0 overflow-x-auto rounded-t-md">
      <nav>
        <ul className="flex mx-4">
          <NavLi to="/" title="Home"/>
          <NavLi to="/team" title="Team"/>
        </ul>
      </nav>
    </div>
  );
}