import Dices from "./Dices"
import Button from "./Button"
import Timer from "./Timer"
import Info from './Info'

type Props = {
    numbers: object[],
    roll: number,
    time: number,
    completed: boolean,
    rollDices: any,
    diceClickHandler: any
}

function Game({numbers, roll, time, completed, rollDices, diceClickHandler}: Props) {
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
            <Info 
                roll={roll} 
                completed={completed}
                time={time}
            />
        </>
    )
}
export default Game