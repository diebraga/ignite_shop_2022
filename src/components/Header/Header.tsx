import React from "react";
import {
  BagContainer,
  BagLink,
  HeaderContainer,
  PointNotification,
} from "./styles";
import Image from "next/image";
import { OutlineBag } from "../../../public/svg/OutlineBag";
import Link from "next/link";

type HeaderProps = {
  toggleDrawer: () => void;
  bagCount: number;
};

const Header: React.FC<HeaderProps> = ({ toggleDrawer, bagCount }) => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image
          style={{ cursor: "pointer" }}
          width={150}
          height={150}
          src="/logo.svg"
          alt=""
        />
      </Link>
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
