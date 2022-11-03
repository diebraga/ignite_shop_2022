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
  totalPrice: string;
  removeFromBag: (key: number, rawPrice: number) => void;
};

const Drawer: React.FC<DrawerProps> = ({
  drawerIsOpen,
  toggleDrawer,
  bag,
  totalPrice,
  removeFromBag,
}) => {
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
                    <a onClick={() => removeFromBag(item.key as number, item.rawPrice)}>
                      Remove
                    </a>
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
              <p>{totalPrice}</p>
            </SummaryTotal>
          </SummaryContainer>
          <Button>Buy now</Button>
        </DrawerFooter>
      </DrawerContainer>
    </ReactDrawer>
  );
};

export default Drawer;
