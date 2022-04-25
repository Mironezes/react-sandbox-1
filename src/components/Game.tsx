import Dices from "./Dices"
import Button from "./Button"
import Timer from "./Timer"
import Info from "./Info"

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
                    rollDices={rollDices}
                    text={"Roll"}
                /> 
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