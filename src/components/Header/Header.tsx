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
};

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <HeaderContainer>
      <Image width={150} height={150} src="/logo.svg" alt="" />
      <BagContainer>
        <PointNotification>
          <p>2</p>
        </PointNotification>
        <BagLink onClick={toggleDrawer}>
          <OutlineBag />
        </BagLink>
      </BagContainer>
    </HeaderContainer>
  );
};

export { Header };