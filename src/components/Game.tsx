import Dices from "./Dices"
import Button from "./Button"
import Rolls from "./Rolls"
import Timer from "./Timer"
import Congratulation from "./Congratulation"

type Props = {
    numbers: object[],
    roll: number,
    time: number,
    completed: boolean,
    rollDices: any,
    diceClickHandler: any
}

function Game({numbers, roll, time, completed, rollDices, diceClickHandler}: Props) {

    let bestScore = localStorage.getItem('tenzies-best-time')

    return(
        <>
            <Timer timer={time} />
            <Dices 
                numbers={numbers} 
                diceClickHandler={diceClickHandler} 
            />
            <Button 
                rollDices={rollDices}
                text={completed ? "Start again" : "Roll"}
            /> 
            {!completed && roll && <Rolls roll={roll} />}
            {!completed && bestScore && 
                <span className="best-time">
                    <strong>Best time: {bestScore} sec</strong>
                    </span>
            }
            {completed && <Congratulation time={time} roll={roll} />}
        </>
    )
}
export default Game