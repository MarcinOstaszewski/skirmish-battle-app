import NavLi from "./NavLi";

export default function Navbar() {
  return (
    <div className="fixed -bottom-0 w-full bg-stone-100 overflow-x-scroll pt-1">
      <nav>
        <ul className="flex mx-4">
          <NavLi to="/" title="Home"/>
          <NavLi to="/team" title="Team"/>
        </ul>
      </nav>
    </div>
  );
}