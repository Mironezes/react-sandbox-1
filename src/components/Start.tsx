type Props = {
    startGame: any
}


function Start({startGame}:Props) {
    return(
        <button className="btn btn--start" onClick={startGame} type="button">Start the game</button>
    )
}
export default Start