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
    translation: Function
}

function Game({numbers, roll, timer, completed, translation,
    rollDices, diceClickHandler, resetGameHandler}: Props) {
    return(
        <>
            <Timer
                translation={translation} 
                timer={timer} 
            />
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
                    {translation("roll-btn.label")}
                </Button>
            }
            <Info 
                roll={roll} 
                completed={completed}
                timer={timer}
                resetGameHandler={resetGameHandler}
                translation={translation}
            />
        </>
    )
}
export default Game