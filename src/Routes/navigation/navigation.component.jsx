import { Fragment } from "react";
import DesktopNavigator from "../../components/desktop-navigator/desktop-navigator.component";
import MobileNavigation from "../../components/mobile-navigation/mobile-navigation.component";
const Navigation = () => {
  return (
    <Fragment>
      <DesktopNavigator />
      <MobileNavigation />
    </Fragment>
  );
};

export default Navigation;
