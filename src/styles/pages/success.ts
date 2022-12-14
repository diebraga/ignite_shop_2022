import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginBottom: "3rem",
    marginTop: "2rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    // marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 138,
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "100%",
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: "cover",
  },
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});
