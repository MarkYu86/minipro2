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
  }
  return (
    <>
      <h2>Gallery Page</h2>
      <Grid container spacing={3} justifyContent="center">
        {data.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card className="card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  className="card-img"
                  component="img"
                  height="220"
                  image={car.imageUrl}
                  alt="vehicle img"
                />
                <CardContent className="card-text">
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {car.make} {car.year}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {car.model}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button
                  className="card-btn"
                  size="small"
                  color="primary"
                  onClick={() => handleOpenDialog(car)}
                >
                  Detail
                </Button>
                <Button className="card-btn" size="small" color="primary">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open}>
        <DialogContent>
          <Typography variant="body1">{carDetails?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
