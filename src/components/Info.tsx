import Rolls from "./Rolls"
import Congratulation from "./Congratulation"


type Props = {
    roll: number,
    completed: boolean,
    time: number
    resetGameHandler: any
}


function Info({roll, completed, time, resetGameHandler}:Props) {

    let bestScore = localStorage.getItem('tenzies-best-time')

    return(
        <section className="panel">
            {roll && <Rolls roll={roll} />}
            {bestScore && 
            <span className="best-time">
                <strong>Best time: {bestScore} sec</strong>
                </span>
            }
            {completed && 
                <Congratulation
                    resetGameHandler={resetGameHandler} 
                    time={time} 
                    roll={roll} 
                />
            }
        </section>
    )
}
export default Info