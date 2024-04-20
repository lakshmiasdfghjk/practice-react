import React from "react";
import ProductTable from "./Productlist";
import { Alert, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Product = () => {
    return (
        <div>
            <Button variant="text">
  Add item
</Button>

<Alert variant="standard" color="info">
  This is an alert!
</Alert>

<TableContainer
  variant="outlined"
>
  <Table aria-label="demo table">
    <TableHead>
      <TableRow>
        <TableCell>Dessert</TableCell>
        <TableCell>Calories</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Frozen yoghurt</TableCell>
        <TableCell>109</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cupcake</TableCell>
        <TableCell>305</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

            <ProductTable />
        </div>
    );
}

export default Product;