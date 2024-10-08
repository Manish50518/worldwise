import Sidebar from "../components/Sidebar";

// import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      {/* <AppNav /> */}
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
