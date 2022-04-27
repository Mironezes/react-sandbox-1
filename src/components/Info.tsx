import Rolls from "./Rolls"
import Congratulation from "./Congratulation"


type Props = {
    roll: number,
    completed: boolean,
    timer: number
    resetGameHandler: any
    translation: Function
}


function Info({roll, completed, timer, translation, resetGameHandler}:Props) {

    let bestScore = localStorage.getItem("tenzies-best-time")

    return(
        <section className="panel">
            {roll && 
                <Rolls translation={translation} roll={roll} />
            }

            {bestScore && 
            <span className="best-time">
                <strong>
                    {translation('best-time.label')}: {bestScore}s
                </strong>
            </span>
            }
            
            {completed && 
                <Congratulation
                    translation={translation}
                    resetGameHandler={resetGameHandler} 
                    timer={timer} 
                    roll={roll} 
                />
            }
        </section>
    )
}
export default Info