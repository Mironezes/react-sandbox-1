type Props = {
    timer: number
}

function Timer({timer}:Props) {
    return(
        <div className="timer">Time: <strong>{timer}s</strong></div>
    )
}
export default Timer