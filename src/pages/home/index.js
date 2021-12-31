import {
  Box,
  Card,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import Img from "../../img/Enter the Matrix_3.png";

import MatrixRain from "../../component/matrix";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    background: "#000",
  },
  cardMedia: {
    width: 200,
    height: 200,
    background: "transparent",
    display: "flex",
    zIndex: 100,
  },

  titleHome: {
    color: "gray",
    fontSize: "2.5rem",
    zIndex: 100,
    textAlign: "center",
    fontWeight: "bold",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <MatrixRain />
      <Box className={classes.container}>
        <Card component={Link} to='/game' className={classes.cardMedia}>
          <CardMedia component='img' image={Img} alt='Button play' />
        </Card>

        <Typography className={classes.titleHome}>
          <b>Matrix</b> Tic Tac Toe
        </Typography>
      </Box>
    </>
  );
}
