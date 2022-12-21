import { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout({
  children,
  currentPageParent,
}: {
  children: ReactNode;
  currentPageParent: string;
}) {
  return (
    <div className="wrapper">
      <Sidebar currentPageParent={currentPageParent} />
      <main>{children}</main>
    </div>
  );
}
