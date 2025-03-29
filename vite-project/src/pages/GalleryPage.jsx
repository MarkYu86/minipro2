import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Dialog, DialogActions, DialogContent, Grid } from "@mui/material";
import "../App.css";

export default function GalleryPage() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [carDetails, setCarDetails] = useState(null);
  const [buyOpen, setBuyOpen] = useState(false);
  const [buyDialog, setBuyDialog] = useState("");

  useEffect(() => {
    fetch("assets/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.cars);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, []);
  if (!data) {
    return <>John Cena</>;
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
      setData((prevData) =>
        prevData.map((item) => (item.id === car.id ? updatedCar : item))
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
      <h2>Gallery Page</h2>
      <Grid container spacing={3} justifyContent="center">
        {data.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card sx={{ maxWidth: 345 }}>
              <div className="card">
                <CardActionArea>
                  <CardMedia
                    className="card-img"
                    component="img"
                    height="220"
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
                      {car.stock > 0 ? (`Stock: ${car.stock}` ): "Out of stock"}
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
    </>
  );
}
