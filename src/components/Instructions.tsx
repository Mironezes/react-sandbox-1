import Difficulty from "./Difficulty"

type Props = {
    gameStart: boolean,
    difficulty: any,
    difficultyHandler: any
}

function Instructions({gameStart, difficulty, difficultyHandler}:Props) {
    return(
        <>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to 
        freeze it at its current value between rolls.</p>

        {!gameStart && 
            <Difficulty  
                difficulty={difficulty}
                difficultyHandler={difficultyHandler} 
            /> 
        }
        </>
    )
}
export default Instructions