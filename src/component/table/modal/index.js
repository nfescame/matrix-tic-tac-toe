import React from "react";
import {
  Button,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";

import imgNew from "../../../img/newWinner.jpeg";
import imgSmith from "../../../img/smithWinner.jpg";
import imgTie from "../../../img/matrix-architect.jpg";

const useStyles = makeStyles((theme) => ({
  containerDialog: {
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  paper: {
    width: "100%",
    height: "100vh",
    background: "#174419",
    color: "#C8F0B0",
    textAlign: "center",
    "& h2": {
      fontSize: "1rem",
    },
  },
  button: {
    fontSize: "1rem",
    color: "#C8F0B0",
  },
  textPerson: {
    fontSize: 2,
  },
}));

export default function Modal({ msg, reset, winner, itsATie }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const textPerson = () => {
    return !itsATie
      ? winner > 0
        ? "I don't believe in fate. Because I don't like the idea of ​​not being able to control my life. -Neo"
        : "Never send a human to do the work of a machine. -Agent Smith"
      : "Your life is the sum of the balance of an unbalanced equation inherent in Matrix programming. -Architect";
  };

  return (
    <Dialog
      className={classes.containerDialog}
      classes={{ paper: classes.paper }}
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{msg}</DialogTitle>
      <DialogContent></DialogContent>
      <Card className={classes.card}>
        <CardMedia
          component='img'
          image={!itsATie ? (winner > 0 ? imgNew : imgSmith) : imgTie}
          alt='image winner'
        />
      </Card>
      <DialogTitle className={classes.textPerson} id='alert-dialog-title'>
        {textPerson()}
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          onClick={() => {
            handleClose();
            reset();
          }}
          autoFocus
        >
          Restart
        </Button>
      </DialogActions>
    </Dialog>
  );
}
