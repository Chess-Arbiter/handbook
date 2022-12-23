import { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({
  children,
  currentPageParent,
}: {
  children: ReactNode;
  currentPageParent: string;
}) {
  return (
    <div className="wrapper">
      <Navbar currentPageParent={currentPageParent} />
      <main>{children}</main>
    </div>
  );
}
