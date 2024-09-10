import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="fixed">
      <Outlet />
      <Navbar />
    </div>
  );
}