import { Link } from "react-router-dom";

export default function NavLi({to, title}: {to: string, title: string}) {
  return (
    <li className="inline-block font-bold mr-1 px-1.5 py-2">
      <Link to={to}>{title}</Link>
    </li>
  );
}