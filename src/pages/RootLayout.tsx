import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <div className="w-full h-full p-4">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
}