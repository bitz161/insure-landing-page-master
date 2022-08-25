import "./footer.styles.css";
import { ReactComponent as Insure } from "../../assets/images/logo.svg";
import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as FooterPatternDesktop } from "../../assets/images/bg-pattern-footer-desktop.svg";
import { ReactComponent as FooterPatternMobile } from "../../assets/images/bg-pattern-footer-mobile.svg";

const PageFooter = () => {
  return (
    <footer className="footer-container">
      <FooterPatternDesktop className="footer-pattern-desktop" />
      <FooterPatternMobile className="footer-pattern-mobile" />
      <section>
        <Insure />
        <div>
          <Facebook className="footer-logo" />
          <Twitter className="footer-logo" />
          <Pinterest className="footer-logo" />
          <Instagram className="footer-logo" />
        </div>
      </section>
      <section>
        <div className="company-container">
          <div>Our company</div>
          <div>How we work</div>
          <div>Why Insure?</div>
          <div>View plans</div>
          <div>Reviews</div>
        </div>
        <div className="help-container">
          <div>Help me</div>
          <div>FAQ</div>
          <div>Terms of use</div>
          <div>Privacy policy</div>
          <div>Cookies</div>
        </div>
        <div className="contact-container">
          <div>Contact</div>
          <div>Sales</div>
          <div>Support</div>
          <div>Live chat</div>
        </div>

        <div className="other-container">
          <div>Others</div>
          <div>Careers</div>
          <div>Press</div>
          <div>Licenses</div>
        </div>
      </section>
    </footer>
  );
};

export default PageFooter;
