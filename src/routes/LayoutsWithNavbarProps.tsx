import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./styles.module.sass";

export function LayoutsWithNavbarProps() {
  return (
    <>
      <div className={styles.flex}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
