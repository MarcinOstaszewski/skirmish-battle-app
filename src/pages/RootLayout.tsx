import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden pt-4 px-4">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
}