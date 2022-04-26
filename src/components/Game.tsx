import Dices from "./Dices"
import Timer from "./Timer"
import Info from "./Info"
import Button from '@mui/material/Button'

type Props = {
    numbers: object[],
    roll: number,
    timer: number,
    completed: boolean,
    rollDices: any,
    resetGameHandler: any
    diceClickHandler: any
}

function Game({numbers, roll, timer, completed, 
    rollDices, diceClickHandler, resetGameHandler}: Props) {
    return(
        <>
            <Timer timer={timer} />
            <Dices 
                numbers={numbers} 
                diceClickHandler={diceClickHandler} 
            />
            {!completed && 
                <Button 
                    variant="contained"
                    onClick={rollDices}
                    className="btn btn-roll"
                >
                    Roll
                </Button>
            }
            <Info 
                roll={roll} 
                completed={completed}
                timer={timer}
                resetGameHandler={resetGameHandler}
            />
        </>
    )
}
export default Game