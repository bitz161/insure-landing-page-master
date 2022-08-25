import { ReactComponent as IntroRightPatter } from "../../assets/images/bg-pattern-intro-right-desktop.svg";
import { ReactComponent as IntroLeftPatter } from "../../assets/images/bg-pattern-intro-left-desktop.svg";
import { ReactComponent as IntroMobileRightPatter } from "../../assets/images/bg-pattern-intro-right-mobile.svg";
import { ReactComponent as IntroMobileLeftPatter } from "../../assets/images/bg-pattern-intro-left-mobile.svg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";

import "./home.styles.css";

const Home = () => {
  const { enableSidebar } = useContext(SidebarContext);
  return (
    <div className="home-container">
      <IntroRightPatter className="intro-right-pattern" />
      <IntroLeftPatter className="intro-left-pattern" />
      <IntroMobileRightPatter className="mobile-intro-right-pattern" />
      {enableSidebar ? (
        ""
      ) : (
        <IntroMobileLeftPatter className="mobile-intro-left-pattern" />
      )}
      <div className="home-content-container">
        <hr />
        <div>
          <h1>Humanizing</h1>
          <h1>your insurance.</h1>
        </div>
        <div>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </div>
        <div>View plans</div>
      </div>
      <div className="home-intro-container">
        <img alt="" className="intro-img" />
      </div>
    </div>
  );
};

export default Home;
