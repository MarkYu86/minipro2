import React, { useState, useEffect, useReducer } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Dialog, DialogActions, DialogContent, Grid } from "@mui/material";
import "../App.css";
import Filter from "../components/Filter";

export default function GalleryPage() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [open, setOpen] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [buyOpen, setBuyOpen] = useState(false);
  const [buyDialog, setBuyDialog] = useState("");

  useEffect(() => {
    fetch("assets/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.cars);
        setFilteredData(data.cars);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);
  const handleFilter = (decade) => {
    if (decade) {
      const [num1, num2] = decade;
      const filtered = data.filter(
        (car) => car.year >= num1 && car.year < num2
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };
  if (!data) {
    return <h1>Loading..</h1>;
  }
  const handleOpenDialog = (car) => {
    setCarDetails(car);
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
    setCarDetails(null);
  };

  const handlePurchase = (car) => {
    if (car.stock > 0) {
      const updatedCar = { ...car, stock: car.stock - 1 };
      const updatedData = data.map((item)=>
      item.id === car.id ? updatedCar: item);
      setData(updatedData);

      setFilteredData((prevFilteredData) =>
        prevFilteredData.map((item) => (item.id === car.id ? updatedCar : item))
      );
      setBuyDialog(
        `Congrats! You have owned the ${car.make} ${car.model} ${car.year}!`
      );
    } else {
      setBuyDialog("Sorry, we are out of stock!");
    }
    setBuyOpen(true);
  };
  const handleBuyClose = () => {
    setBuyOpen(false);
  };
  return (
    <>
      {/* <h2>Gallery Page</h2> */}
      <Filter onFilterChange={handleFilter} />
      <Grid container spacing={3} justifyContent="center">
        {filteredData.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card
              sx={{
                width: 315,
                height: "100%",
              }}
            >
              <div className="card">
                <CardActionArea
                  sx={{
                    pointerEvents: "none",
                  }}
                >
                  <CardMedia
                    className="card-img"
                    component="img"
                    height="200"
                    image={car.imageUrl}
                    alt="vehicle img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {car.make} {car.year}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {car.model}
                    </Typography>
                    <Typography
                      className="stock"
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {car.stock > 0 ? `Stock: ${car.stock}` : "Out of stock"}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    className="card-btn"
                    size="small"
                    color="primary"
                    onClick={() => handleOpenDialog(car)}
                  >
                    Detail
                  </Button>

                  <Button
                    className="card-btn"
                    size="small"
                    color="primary"
                    onClick={() => handlePurchase(car)}
                    disabled={car.stock === 0}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open}>
        <div className="diacontent">
          <DialogContent>
            <Typography variant="body1">{carDetails?.description}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </div>
      </Dialog>

      <Dialog open={buyOpen} onClose={handleBuyClose}>
        <div className="diacontent">
          <DialogContent>
            <Typography variant="body1">{buyDialog}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleBuyClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <footer>
        <p> More cars coming soon... </p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
