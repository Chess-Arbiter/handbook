import Branding from "../../components/Branding/Branding";
import styles from "./static-layout.module.css";

export default function StaticPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Branding />
      {children}
    </div>
  );
}
