import { ReactComponent as Snappy } from "../../assets/images/icon-snappy-process.svg";
import { ReactComponent as Affordable } from "../../assets/images/icon-affordable-prices.svg";
import { ReactComponent as People } from "../../assets/images/icon-people-first.svg";

import "./work.styles.css";

const HowWeWork = () => {
  return (
    <div className="work-container">
      <div className="work-inner-container">
        <hr />
        <h2 className="headers-font different">We're different</h2>

        <div className="offers-container">
          <div className="snappy-container  offers">
            <Snappy />
            <div className="headers-font work-headers">Snappy Process</div>
            <div>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </div>
          </div>

          <div className="affordable-container offers">
            <Affordable />
            <div className="headers-font work-headers">Affordable Prices</div>
            <div>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </div>
          </div>

          <div className="people-container offers">
            <People />
            <div className="headers-font work-headers">People First</div>
            <div>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
