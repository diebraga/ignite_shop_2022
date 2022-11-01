import { styled } from "../../styles";

export const ButtonContainer = styled("button", {
  marginTop: "auto",
  background: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",
  "&:hover": {
    background: "$green300",
  },
  "&:not(:disabled)disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});
