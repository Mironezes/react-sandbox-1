import {useState} from 'react'

type Props = {
    roll: number,
    time: number
}

function Congratulation({roll, time}: Props) {

    const [modal, setModal] = useState(true)

    return(
        <div className={`congratulation ${modal ? 'open' : ''}`}>
            <span className="close-btn" onClick={() => setModal(!setModal)}></span>
            <h3>Congratulations!</h3>
            <span>You resolved this puzzle in {roll} rolls and {time} seconds</span>
        </div>
    )
}
export default Congratulation