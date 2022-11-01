import React from "react";
import ReactDrawer from "react-modern-drawer";

type DrawerProps = {
  drawerIsOpen: boolean;
  toggleDrawer: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ drawerIsOpen, toggleDrawer }) => {
  return (
    <ReactDrawer
      open={drawerIsOpen}
      onClose={toggleDrawer}
      direction="right"
      style={{ width: "1000px", background: "#202024" }}
    ></ReactDrawer>
  );
};

export { Drawer };
