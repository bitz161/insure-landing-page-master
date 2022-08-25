import "./mobile-navigation.styles.css";
import { ReactComponent as Insure } from "../../assets/images/logo.svg";
import Sidebar from "../sidebar/sidebar.component";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import { ReactComponent as Hamburger } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";

const MobileNavigation = () => {
  const { enableSidebar, setEnableSidebar } = useContext(SidebarContext);

  const handleSidebar = () => {
    setEnableSidebar(!enableSidebar);
  };

  return (
    <>
      <div className="mobile-navigation-container">
        <Insure />

        {enableSidebar ? (
          <CloseIcon className="toggle-icon" onClick={handleSidebar} />
        ) : (
          <Hamburger className="toggle-icon" onClick={handleSidebar} />
        )}
      </div>
      {enableSidebar && <Sidebar />}
    </>
  );
};

export default MobileNavigation;
