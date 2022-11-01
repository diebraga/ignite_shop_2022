import React from "react";
import ReactDrawer from "react-modern-drawer";
import { Button } from "../Button/Button";
import {
  CloseButton,
  DrawerContainer,
  DrawerFooter,
  Heading,
  SummaryContainer,
  SummaryQuantity,
  SummaryTotal
} from "./styles";

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
          <SummaryContainer>
            <SummaryQuantity>
              <p>Quantity</p>
              <p>3 Items</p>
            </SummaryQuantity>
            <SummaryTotal>
              <p>Total Price</p>
              <p>£ 99</p>
            </SummaryTotal>
          </SummaryContainer>
          <Button />
        </DrawerFooter>
      </DrawerContainer>
    </ReactDrawer>
  );
};

export { Drawer };
