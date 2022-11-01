import React from "react";
import {
  BagContainer,
  BagLink,
  HeaderContainer,
  PointNotification,
} from "./styles";
import Image from "next/image";
import { OutlineBag } from "../../../public/svg/OutlineBag";

type HeaderProps = {
  toggleDrawer: () => void;
  bagCount: number;
};

const Header: React.FC<HeaderProps> = ({ toggleDrawer, bagCount }) => {
  return (
    <HeaderContainer>
      <Image width={150} height={150} src="/logo.svg" alt="" />
      <BagContainer>
        {bagCount > 0 && (
          <PointNotification>
            <p>{bagCount}</p>
          </PointNotification>
        )}
        <BagLink onClick={toggleDrawer}>
          <OutlineBag />
        </BagLink>
      </BagContainer>
    </HeaderContainer>
  );
};

export { Header };
