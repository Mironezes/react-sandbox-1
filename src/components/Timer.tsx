type Props = {
    timer: number,
    translation: Function
}

function Timer({timer, translation}:Props) {
    return(
        <div className="timer">{translation("total-time.label")}: <strong>{timer}s</strong></div>
    )
}
export default Timer