import {
  Box,
  Button,
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
  myBtn: {
    color: "#f0f0f0",
    background: "#001800",
    border: "1px solid #eeeeee",
    zIndex: 100,
    width: "8rem",
    height: "2rem",
  },
  titleHome: {
    color: "gray",
    fontSize: "4rem",
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
        <Card className={classes.cardMedia}>
          <CardMedia component='img' image={Img} alt='Button play' />
        </Card>
        <Button
          component={Link}
          to='/game'
          className={classes.myBtn}
          variant='contained'
        >
          Play
        </Button>
        <Typography className={classes.titleHome}>
          <b>Matrix</b> Tic Tac Toe
        </Typography>
      </Box>
    </>
  );
}
