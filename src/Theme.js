import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "rgb(239,242,232)",
    },
    background: {
      paper: "#1F2128",
      default: "#17181F",
    },
    divider: "rgb(67,73,85)",
  },
});
  
export default Theme;
