import Rolls from "./Rolls"
import Congratulation from "./Congratulation"


type Props = {
    roll: number,
    completed: boolean,
    time: number
}


function Info({roll, completed, time}:Props) {

    let bestScore = localStorage.getItem('tenzies-best-time')

    return(
        <section className="panel">
            {!completed && roll && <Rolls roll={roll} />}
            {!completed && bestScore && 
            <span className="best-time">
                <strong>Best time: {bestScore} sec</strong>
                </span>
            }
            {completed && <Congratulation time={time} roll={roll} />}
        </section>
    )
}
export default Info