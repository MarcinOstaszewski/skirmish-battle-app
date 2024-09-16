import { Link } from "react-router-dom";

export default function InlineRoute({to, title}: {to: string, title: string}) {
  return (
    <Link className="text-sky-800 dark:text-sky-500" to={to}>{title}</Link>
  )
};