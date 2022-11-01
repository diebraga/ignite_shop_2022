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
import { ProductType } from "../../pages";

type DrawerProps = {
  drawerIsOpen: boolean;
  toggleDrawer: () => void;
  bag: ProductType[];
};

const Drawer: React.FC<DrawerProps> = ({ drawerIsOpen, toggleDrawer, bag }) => {
  const sumTotal = bag.reduce((prev, cur) => {
    return prev + cur.rawPrice;
  }, 0);

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
            {bag.map((item) => {
              return (
                <ProductContainer key={item.key}>
                  <ProductImage>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                  </ProductImage>
                  <ProductDescription>
                    <div>
                      <ProductName>{item.name}</ProductName>
                      <ProductPrice>{item.price}</ProductPrice>
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
              <p>{bag.length} Items</p>
            </SummaryQuantity>
            <SummaryTotal>
              <p>Total Price</p>
              <p>{String(bag.reduce((n, { rawPrice }) => n + rawPrice, 0))}</p>
            </SummaryTotal>
          </SummaryContainer>
          <Button />
        </DrawerFooter>
      </DrawerContainer>
    </ReactDrawer>
  );
};

export { Drawer };
