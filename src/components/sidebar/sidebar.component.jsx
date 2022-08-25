import "./sidebar.styles.css";
import { ReactComponent as SidebarPattern } from "../../assets/images/bg-pattern-mobile-nav.svg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import { motion, AnimatePresence } from "framer-motion";

const showVariant = {
  visible: {
    x: 0,
  },
  close: {
    x: "100%",
    transition: {
      duration: 0.5,
    },
  },
  hidden: { x: "100%" },
};

const Sidebar = () => {
  const { enableSidebar } = useContext(SidebarContext);
  return (
    <AnimatePresence>
      <motion.div
        className="sidebar-links-container"
        variants={showVariant}
        initial="hidden"
        animate={enableSidebar ? "visible" : "close"}
      >
        <div>How we work</div>
        <div>Blog</div>
        <div>Account</div>
        <div>View plans</div>
        <SidebarPattern className="sidebar-pattern" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
