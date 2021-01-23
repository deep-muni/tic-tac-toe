import React, {useState} from 'react';
import Board from "./Board";
import {initialGrid} from "../helper/initialGrid";
import {checkWinner} from "../helper/checkWinner";
import {checkTied} from "../helper/checkTied";
import RefreshIcon from '@material-ui/icons/Refresh';

const Game = () => {

    const [grid, setGrid] = useState(initialGrid);
    const [player, setPlayer] = useState(true);
    const [winner, setWinner] = useState('');
    const [status, setStatus] = useState(false);

    const reset = () => {
        setGrid([
            {index: 0, value: '_', disabled: false},
            {index: 1, value: '_', disabled: false},
            {index: 2, value: '_', disabled: false},
            {index: 3, value: '_', disabled: false},
            {index: 4, value: '_', disabled: false},
            {index: 5, value: '_', disabled: false},
            {index: 6, value: '_', disabled: false},
            {index: 7, value: '_', disabled: false},
            {index: 8, value: '_', disabled: false}
        ]);
        setPlayer(true);
        setWinner('');
        setStatus(false);
    }

    const handleClick = (index) => {
        let tempGrid = [...grid];
        tempGrid[index].value = player ? 'X' : 'O';
        tempGrid[index].disabled = true;

        setPlayer(!player);
        setGrid(tempGrid);

        if(checkTied(grid)){
            setWinner("Match Tied");
            setStatus(true);
        }else{
            let winner = checkWinner(grid);
            if (winner.length > 0) {
                setWinner(winner + " Wins");
                tempGrid.map(grid => {
                    grid.disabled = true;
                });
                setStatus(true);
                setGrid(tempGrid);
            }
        }
    }

    return (
        <div className="game">
            {status ? <RefreshIcon
                onClick={reset}
                className="game__reset"
                style = {{fontSize : "45px"}}>Reset
            </RefreshIcon> : null}
            <Board
                value={grid}
                onClick={index => handleClick(index)}/>
            {status ? <p className="game__winner">{winner}</p> : null}
        </div>
    );
};

export default Game;