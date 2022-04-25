type Props = {
    roll: number,
    time: number
}

function Congratulation({roll, time}: Props) {
    return(
        <div className="congratulation">
            <h3>Congratulations!</h3>
            <span>You resolved this puzzle in {roll} rolls and {time} seconds</span>
        </div>
    )
}
export default Congratulation