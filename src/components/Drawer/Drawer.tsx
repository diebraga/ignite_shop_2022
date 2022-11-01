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
  SummaryTotal,
  DrawerContent,
  ProductImage,
  ProductContainer,
  ProductDescription,
  ProductName,
  ProductPrice,
} from "./styles";
import Image from "next/image";

type DrawerProps = {
  drawerIsOpen: boolean;
  toggleDrawer: () => void;
};

const items = Array.from(Array(10).keys());

const Drawer: React.FC<DrawerProps> = ({ drawerIsOpen, toggleDrawer }) => {
  return (
    <ReactDrawer
      open={drawerIsOpen}
      onClose={toggleDrawer}
      direction="right"
      style={{ width: "500px", background: "#202024" }}
    >
      <DrawerContainer>
        <CloseButton onClick={toggleDrawer}>X</CloseButton>

        <DrawerContent>
          <Heading>Items in your bag</Heading>

          <div>
            {items.map((item) => {
              return (
                <ProductContainer key={item}>
                  <ProductImage>
                    <Image
                      src={"https://github.com/diebraga.png"}
                      alt={""}
                      width={100}
                      height={100}
                    />
                  </ProductImage>
                  <ProductDescription>
                    <div>
                      <ProductName>Camiseta bb 45</ProductName>
                      <ProductPrice>£ 45</ProductPrice>
                    </div>
                    <a>Remove</a>
                  </ProductDescription>
                </ProductContainer>
              );
            })}
          </div>
        </DrawerContent>
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
