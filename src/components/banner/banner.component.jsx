import "./banner.styles.css";
import { ReactComponent as HowWeWorkPatternDesktop } from "../../assets/images/bg-pattern-how-we-work-desktop.svg";
import { ReactComponent as HowWeWorkPatternMobile } from "../../assets/images/bg-pattern-how-we-work-mobile.svg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="inner-banner-container">
        <h2 className="headers-font">Find out more about how we work</h2>
        <div>How we work</div>
      </div>
      <HowWeWorkPatternDesktop className="howweworkpattern" />
      <HowWeWorkPatternMobile className="howweworkpatternmobile" />
    </div>
  );
};

export default Banner;
