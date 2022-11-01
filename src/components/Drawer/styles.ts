import { styled } from "../../styles";

export const DrawerContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  minHeight: "100%",
  justifyItems: "center",

  div: {
    maxHeight: 600,
    overflow: "scroll",
  },
});

export const Heading = styled("h1", {
  fontWeight: 700,
  fontSize: "$lg",
  color: "$gray100",
  marginBottom: 20,
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

export const DrawerContent = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  marginTop: 60,
  padding: 20,
});

export const ProductImage = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  alignItems: "center",
  justifyContent: "center",
  width: 100,
  img: {
    objectFit: "cover",
  },
});

export const ProductContainer = styled("div", {
  width: "100%",
  display: "flex",
  marginTop: 20,
});

export const ProductDescription = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",

  a: {
    color: "$green500",
    padding: "5px 15px",
    fontWeight: 700,
    cursor: "pointer",

    "&:hover": {
      color: "$green500",
    },
  },

  div: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 15px",
  },
});

export const ProductName = styled("p", {
  color: "$gray300",
});

export const ProductPrice = styled("span", {
  fontWeight: 700,
  color: "$gray100",
  fontSize: "$md",
  marginTop: 5,
});
