import React, { useState } from "react";
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
import axios from "axios";
import _ from "lodash";

type DrawerProps = {
  drawerIsOpen: boolean;
  toggleDrawer: () => void;
  bag: ProductType[];
  totalPrice: string;
  removeFromBag: (key: string, rawPrice: number) => void;
};

const Drawer: React.FC<DrawerProps> = ({
  drawerIsOpen,
  toggleDrawer,
  bag,
  totalPrice,
  removeFromBag,
}) => {
  const [checkoutIsLoading, setIsCheckoutLoading] = useState(false);

  const formattedItemsList = bag.map((item: ProductType) => {
    return {
      price: item.defaultPriceId,
      quantity: bag.filter((filteredItem) => item.id === filteredItem.id)
        .length,
    };
  });

  const handleBuyProduct = async (): Promise<void> => {
    try {
      setIsCheckoutLoading(true);
      const response = await axios.post("/api/checkout", {
        bag: _.uniqBy(formattedItemsList, "price"),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error: any) {
      setIsCheckoutLoading(false);
      alert("Error making checkout");
      console.log(error);
    }
  };

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
                    <a
                      onClick={() =>
                        removeFromBag(String(item.key), item.rawPrice)
                      }
                    >
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
          <Button isDisabled={checkoutIsLoading} onClick={handleBuyProduct}>
            Pay now
          </Button>
        </DrawerFooter>
      </DrawerContainer>
    </ReactDrawer>
  );
};

export default Drawer;
