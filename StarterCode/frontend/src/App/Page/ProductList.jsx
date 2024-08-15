import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductList = ({ products, onDeleteProduct, isLoading, error }) => {

  //implement the get products function
  // const fetchProducts = () => {
  // };

  // //implement the delete function
  // const handleDelete = (id) => {
  // };

  return (
    <Container>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", textAlign: "center", marginTop: "20px" }}
      >
        Simple Card List
      </Typography>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ position: "relative" }}>
              <IconButton
                sx={{
                  position: "absolute",
                  color: "red",
                  top: 8,
                  left: 8,
                }}
                onClick={() => onDeleteProduct(product.id)}
              >
                <DeleteIcon />
              </IconButton>

              <CardMedia
                component="img"
                height="150"
                image={product.imageUrl}
                alt={product.description}
              />

              <CardContent>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", marginTop: "20px" }}
                >
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;