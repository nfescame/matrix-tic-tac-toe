import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Modal from "./modal";

import "./style.css";

import imgPlayer1 from "../../img/player1.jpeg";
import imgPlayer2 from "../../img/player2.jpg";
import { Typography } from "@material-ui/core";

export default function Table() {
  const [values, setValues] = useState(getInitialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  function getWinner(v) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const sumRow =
          v[`${row}-${col}`] + v[`${row}-${col + 1}`] + v[`${row}-${col + 2}`];
        if (sumRow === 3 || sumRow === -3) {
          return sumRow;
        }

        const sumCol =
          v[`${row}-${col}`] + v[`${row + 1}-${col}`] + v[`${row + 2}-${col}`];
        if (sumCol === 3 || sumCol === -3) {
          return sumCol;
        }

        const sumDiagonal =
          v[`${row}-${col}`] +
          v[`${row + 1}-${col - 1}`] +
          v[`${row + 2}-${col - 2}`];
        if (sumDiagonal === 3 || sumDiagonal === -3) {
          return sumDiagonal;
        }

        const sumReverseDiagonal =
          v[`${row}-${col}`] +
          v[`${row + 1}-${col + 1}`] +
          v[`${row + 2}-${col + 2}`];
        if (sumReverseDiagonal === 3 || sumReverseDiagonal === -3) {
          return sumReverseDiagonal;
        }
      }
    }

    return null;
  }

  function getInitialState() {
    const state = {};
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        state[`${row}-${col}`] = null;
      }
    }
    console.log(state);
    return state;
  }

  const getKeyFromIndex = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return `${row}-${col}`;
  };

  const getLabel = (value) => {
    if (!value) {
      return null;
    }
    return value > 0 ? (
      <img className='imgPlayer' src={imgPlayer1} alt='plyer1'></img>
    ) : (
      <img className='imgPlayer' src={imgPlayer2} alt='plyer2'></img>
    );
  };

  function handleClick(key) {
    if (winner || values[key]) {
      return;
    }
    const newValues = {
      ...values,
      [key]: player,
    };

    setValues(newValues);

    setPlayer(player * -1);
    const newWinner = getWinner(newValues);

    if (newWinner) {
      setWinner(newWinner > 0 ? 1 : -1);
    }
  }

  function reset() {
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
  }

  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  function changeTopLabel(player) {
    return player === 1 ? (
      <p className='a'>
        Player <strong>1</strong> to move
      </p>
    ) : (
      <p className='b'>
        Player <strong>2</strong> to move
      </p>
    );
  }

  return (
    <Box className='table'>
      <Typography className='textTop'>{changeTopLabel(player)}</Typography>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Array.from({ length: 9 }).map((_, index) => {
          const key = getKeyFromIndex(index);
          return (
            <Grid key={index} item xs={4}>
              <button
                type='button'
                className='quadrado'
                onClick={() => {
                  handleClick(key);
                }}
              >
                {getLabel(values[key])}
              </button>
            </Grid>
          );
        })}
      </Grid>
      {winner || itsATie ? (
        <Box className='gameMenu'>
          {winner ? (
            <Modal
              winner={winner}
              msg={winner > 0 ? "Sr. Anderson winner" : "Agent Smith winner"}
              reset={reset}
            />
          ) : (
            // <h1>O ganhador é {winner > 0 ? "O" : "X"}</h1>
            <Modal msg={"A tie"} reset={reset} />
          )}
        </Box>
      ) : null}
    </Box>
  );
}
