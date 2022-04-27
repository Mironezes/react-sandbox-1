import Difficulty from "./Difficulty"

type Props = {
    gameStarted: boolean,
    translation: Function,
    difficultyHandler: object
}

function Instructions({gameStarted, difficultyHandler, translation}:Props) {
    return(
        <>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">{translation('instruction.label')} </p>

        {!gameStarted && 
            <Difficulty  
                difficultyHandler={difficultyHandler} 
                translation={translation} 
            /> 
        }
        </>
    )
}
export default Instructions