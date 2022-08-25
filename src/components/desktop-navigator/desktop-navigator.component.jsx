import "./desktop-navigator.styles.css";
import { ReactComponent as Insure } from "../../assets/images/logo.svg";

const DesktopNavigator = () => {
  return (
    <div className="desktop-navigator-container">
      <Insure />
      <div className="desktop-navigator-links">
        <div>How we work</div>
        <div>Blog</div>
        <div>Account</div>
        <div>View plans</div>
      </div>
    </div>
  );
};

export default DesktopNavigator;
