import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <Link to="/">Root</Link>
      <Link to="/team">Team</Link>
      <Link to="/">Root</Link>
    </div>
  );
}