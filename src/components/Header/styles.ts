import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  // background: "red",

  display: "flex",
  // justifyContent: "space-between",
  alignItems: "center",
});

export const BagLink = styled("a", {
  cursor: "pointer",
});

export const BagContainer = styled("div", {
  position: "relative",
});

export const PointNotification = styled("div", {
  background: "$green500",
  color: "$gray100",
  position: "absolute",
  top: -7,
  right: -7,
  borderRadius: "50%",
  height: "24px",
  width: "24px",

  textAlign: "center",

  p: {
    marginTop: 1,
  },
});
