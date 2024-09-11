import { Link } from "react-router-dom";

export default function NavLi({to, title}: {to: string, title: string}) {
  return (
    <li className="inline-block mr-3 px-3 py-2 bg-stone-300 text-stone-700 font-bold rounded-t-lg">
      <Link to={to}>{title}</Link>
    </li>
  );
}