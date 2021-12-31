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

const useStyles = makeStyles((theme) => ({
  containerDialog: {
    background: "rgba(0,0,0,0.7)",
  },
  paper: {
    width: "100%",
    height: "50vh",
    background: "#001800",
    color: "#fff",
  },
}));

export default function Modal({ msg, reset, winner }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
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
      <Card>
        <CardMedia
          component='img'
          image={winner > 0 ? imgNew : imgSmith}
          alt='image winner'
        />
      </Card>
      <DialogActions className={classes.dialogAction}>
        <Button
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
