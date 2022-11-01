import React from "react";
import ReactDrawer from "react-modern-drawer";
import { Button } from "../Button/Button";
import { CloseButton, DrawerContainer, DrawerFooter, Heading } from "./styles";

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
      style={{ width: "500px", background: "#202024" }}
    >
      <DrawerContainer>
        <CloseButton>X</CloseButton>
        <Heading>Your bag</Heading>

        <DrawerFooter>
          <Button />
        </DrawerFooter>
      </DrawerContainer>
    </ReactDrawer>
  );
};

export { Drawer };
