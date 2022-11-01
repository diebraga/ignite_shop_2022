import { styled } from "../../styles";

export const DrawerContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  minHeight: "100%",
  // background: "red",
});

export const Heading = styled("h1", {
  fontWeight: 700,
  fontSize: "$lg",
  color: "$gray300",
});

export const CloseButton = styled("a", {
  cursor: "pointer",
  position: "absolute",
  top: 30,
  right: 30,
  fontSize: "$lg",
  color: "$white",
});

export const DrawerFooter = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  // background: "red",
});
