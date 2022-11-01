import { styled } from "../../styles";

export const DrawerContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  minHeight: "100%",
  justifyItems: "center",
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
  width: "92%",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  left: 0,

  justifyItems: "center",
  padding: 20,
  marginRight: 20,
});

export const SummaryContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const SummaryQuantity = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",

  fontSize: "$md",
  color: "$gray300",
  fontWeight: 700,
  marginBottom: 10,
});

export const SummaryTotal = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",

  fontSize: "$lg",

  color: "$white",
  fontWeight: 700,
  marginBottom: 40,
});
