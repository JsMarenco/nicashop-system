import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, Button, Typography } from "@mui/material";
import App from "./App";
import MyTheme from "./Theme";
import "./index.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={MyTheme}>
      <Box
        sx={{
          maxWidth: "1300px",
          backgroundColor: "background.default",
          margin: "0 auto",
        }}
      >
        <Container maxWidth="xl">
          <App />

          <Typography
            variant="body1"
            mt={2}
            mb={2}
            align="center"
            color="text.primary"
          >
            Next update you will can pay with crypto
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Button href="https:jsmarenco-dev.web.app" color="primary">
              Visit my portafolio
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
