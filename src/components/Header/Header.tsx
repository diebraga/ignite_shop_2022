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
  isSuccessPage: boolean;
};

const Header: React.FC<HeaderProps> = ({
  toggleDrawer,
  bagCount,
  isSuccessPage,
}) => {
  return (
    <HeaderContainer
      css={{ justifyContent: isSuccessPage ? "center" : "space-between" }}
    >
      <Link href="/">
        <Image
          style={{ cursor: "pointer" }}
          width={150}
          height={150}
          src="/logo.svg"
          alt=""
        />
      </Link>
      {!isSuccessPage && (
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
      )}
    </HeaderContainer>
  );
};

export { Header };
