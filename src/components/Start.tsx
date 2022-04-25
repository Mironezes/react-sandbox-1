type Props = {
    startGame: any
}


function Start({startGame}:Props) {
    return(
        <button className="start-btn" onClick={startGame} type="button">Start the game</button>
    )
}
export default Start