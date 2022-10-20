import { globalCss } from ".";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  "body, input, textarea, button": {
    fontFamily: "sans-serif",
    fontWeight: 400,
  },
});

export { globalStyles };
