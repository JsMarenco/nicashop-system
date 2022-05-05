import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ItemCard(props) {
  const { index, name, price, amount } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ width: "60%" }}
        color="text.primary"
        mr={2}
      >
        {name}
      </Typography>

      <Typography
        variant="body1"
        sx={{ width: "15%" }}
        mr={2}
        color="text.primary"
      >
        Price: ${`${price}`}
      </Typography>

      <Typography variant="body1" mr={2} color="text.primary">
        Amount: {`${amount}`}
      </Typography>

      <Typography variant="body1" color="text.primary" mr={2}>
        ID: {index + 1}
      </Typography>
    </Box>
  );
}
