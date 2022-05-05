import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Console(props) {
  const { messageList, clearConsole } = props;

  return (
    <Paper
      sx={{
        p: 2,
        height: "400px",
        overflowY: "auto",
      }}
      variant="outlined"
    >
      <Box
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="text.primary" flexGrow={1}>
          Console
        </Typography>

        <Button
          startIcon={<DeleteOutlineOutlinedIcon />}
          onClick={clearConsole}
          size="small"
        >
          Clear
        </Button>
      </Box>

      <Stack sx={{ width: "100%" }} spacing={2}>
        {messageList.map((message, index) => {
          return (
            <Alert
              key={message.label + index}
              elevation={5}
              variant="filled"
              severity={message.severity}
              color={message.severity}
            >
              {message.label}
            </Alert>
          );
        })}
      </Stack>
    </Paper>
  );
}
