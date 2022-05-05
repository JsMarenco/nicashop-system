import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { capitalizeFirstLetter, deleteSpaces } from "./utils";
import Grid from "@mui/material/Grid";

import {
  ERROR_PRODUCT_NAME,
  ERROR_PRODUCT_PRICE,
  ERROR_PRODUCT,
  PRODUCT_LIST_CLEAR,
  CONSOLE_CLEAR,
  ERROR_EMPTY_LIST,
} from "./componets/Constants";

// ICONS
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import ProductList from "./componets/ProductList";
import Console from "./componets/Console";

export default function App() {
  const [messageList, SetMessageList] = useState([]);

  const [productList, setProductList] = useState([]);
  const [productsTotal, setProductsTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // LIKE JQUERY
  const $ = (id) => {
    return document.getElementById(id).value.trim();
  };

  const addItem = () => {
    const name = $("product_name");
    const price = $("product_price");

    if (name === "" && name <= 0) {
      newMessage(ERROR_PRODUCT, "error");
      return false;
    }

    if (name === "") {
      newMessage(ERROR_PRODUCT_NAME, "error");
      return false;
    }

    if (price <= 0) {
      newMessage(ERROR_PRODUCT_PRICE, "error");
      return false;
    }

    const _name = capitalizeFirstLetter(deleteSpaces(name));

    if (productExist(_name) === false) {
      const newProduct = {
        name: _name,
        price: price,
        amount: 1,
        id: productList.length + 1,
      };

      setProductList([...productList, newProduct]);
    }
  };

  const removeItem = () => {
    const id = $("product_to_remove");

    let arr = productList;

    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id - 1 === Number(id) - 1) {
        arr.splice(i, 1);

        for (let j = 0; j < arr.length; j++) {
          arr[j].id = j + 1;
        }

        setProductList(arr);

        break;
      }
    }
  };

  const clearList = () => {
    if (productList.length === 0) {
      newMessage(ERROR_EMPTY_LIST, "error");
    } else {
      setProductList([]);
      setProductsTotal(0);
      setTotalPrice(0);

      newMessage(PRODUCT_LIST_CLEAR, "success");
    }
  };

  const clearConsole = () => {
    newMessage(CONSOLE_CLEAR, "success", true);
  };

  const productExist = (product) => {
    let exist;

    for (let i = 0; i < productList.length; i++) {
      let a = productList[i].name.toLowerCase().trim();
      let b = product.toLowerCase().trim();

      if (a === b) {
        productList[i].amount = productList[i].amount + 1;

        exist = true;
        break;
      }
    }

    return exist ? true : false;
  };

  const totalItems = () => {
    let total = 0;

    for (let i = 0; i < productList.length; i++) {
      total = total + productList[i].amount;
    }

    setProductsTotal(total);
  };

  const totalToPay = () => {
    let total = 0;

    for (let i = 0; i < productList.length; i++) {
      let amount = productList[i].amount;
      let price = productList[i].price;

      let finalPrice = amount * price;

      total = total + finalPrice;
    }

    setTotalPrice(parseFloat(total.toFixed(2)));
  };

  const getBill = () => {
    if (productList.length === 0) {
      newMessage(ERROR_EMPTY_LIST, "error");
    } else {
      totalItems();
      totalToPay();
    }
  };

  const newMessage = (message, messageType, clearConsole = false) => {
    let newMessage = { label: message, severity: messageType };

    clearConsole
      ? SetMessageList([newMessage])
      : SetMessageList([...messageList, newMessage]);
  };

  console.log("IF YOU CAN SEE THIS TEXT THAT'S MEAN... YOU ARE A DEVELOPER :)");

  return (
    <>
      <Typography
        align="center"
        mb={2}
        mt={2}
        variant="h5"
        color="text.primary"
      >
        NicaShop
      </Typography>

      <Grid container direction="row" alignItems="stretch" spacing={1} mb={1}>
        <Grid item xs={12} sm={8} md={9}>
          <ProductList
            productList={productList}
            productsTotal={productsTotal}
            totalPrice={totalPrice}
            clearList={clearList}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Console messageList={messageList} clearConsole={clearConsole} />
        </Grid>

        <Grid item>
          <Paper
            sx={{
              height: "80px",
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <TextField
              autoComplete="off"
              id="product_name"
              size="small"
              sx={{ mr: 2 }}
              label="Name"
            />

            <TextField
              autoComplete="off"
              id="product_price"
              size="small"
              sx={{ mr: 2 }}
              label="Price"
              type="number"
            />

            <Button
              onClick={(e) => addItem()}
              startIcon={<AddCircleOutlinedIcon />}
              size="small"
            >
              Add
            </Button>
          </Paper>
        </Grid>

        <Grid item>
          <Paper
            sx={{
              height: "80px",
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <TextField
              autoComplete="off"
              id="product_to_remove"
              size="small"
              sx={{ mr: 2 }}
              label="ID"
              type="number"
            />

            <Button
              startIcon={<DeleteOutlineOutlinedIcon />}
              onClick={(e) => removeItem()}
            >
              Delete
            </Button>
          </Paper>
        </Grid>

        <Grid item flexGrow={1}>
          <Paper
            sx={{
              height: "80px",
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <Button
              startIcon={<DeleteOutlineOutlinedIcon />}
              onClick={() => getBill()}
              size="normal"
              sx={{ width: "100%" }}
            >
              Get total
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
