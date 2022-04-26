import Difficulty from "./Difficulty"

type Props = {
    gameStarted: boolean,
    difficulty: any,
    difficultyHandler: any
}

function Instructions({gameStarted, difficulty, difficultyHandler}:Props) {
    return(
        <>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to 
        freeze it at its current value between rolls.</p>

        {!gameStarted && 
            <Difficulty  
                difficultyHandler={difficultyHandler} 
            /> 
        }
        </>
    )
}
export default Instructions