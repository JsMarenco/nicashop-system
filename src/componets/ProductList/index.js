import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ItemCard from "../Card/ItemsCard";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function ProductList(props) {
  const { productList, totalPrice, productsTotal, clearList } = props;

  return (
    <Paper
      sx={{
        p: 2,
        height: "400px",
        overflowY: "auto",
      }}
      variant="outlined"
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{ mr: 2 }}
          color="text.primary"
          flexGrow={1}
        >
          Product List
        </Typography>

        <Typography variant="h6" sx={{ mr: 2 }} color="text.primary">
          Items: {productsTotal}
        </Typography>

        <Typography variant="h6" sx={{ mr: 2 }} color="text.primary">
          Total: ${totalPrice}
        </Typography>

        <Button
          startIcon={<DeleteOutlineOutlinedIcon />}
          onClick={clearList}
          size="small"
        >
          Clear
        </Button>
      </Box>

      <Box>
        {productList.map((item, index) => {
          return (
            <Box key={item.name + index}>
              <Divider flexItem sx={{ mt: 1, mb: 1, width: "100%" }} />

              <ItemCard
                index={index}
                name={item.name}
                amount={item.amount}
                price={item.price}
              />
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}
