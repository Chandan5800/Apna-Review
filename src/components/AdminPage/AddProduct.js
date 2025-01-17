import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
} from "@mui/material";

const numbers = [
  {
    value: "all category",
    label: "All Category",
  },
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "footwear",
    label: "Footwear",
  },
  {
    value: "clothes",
    label: "Clothes",
  },
];

const AddProduct = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  return (
    <Grid container spacing={0}>
      <Grid item lg={12} md={12} xs={12}>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Add Product
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="default-value"
              label="Title"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Price"
              type="price"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            
            <Grid
              container
              spacing={0}
              sx={{
                mb: 2,
              }}
            >
              
            </Grid>
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Category"
              value={number}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="email-text"
              label=""
              fixed
              type="file"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <div>
              <Button color="primary" variant="contained">
                Create Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Grid>
    </Grid>
  );
};

export default AddProduct;
