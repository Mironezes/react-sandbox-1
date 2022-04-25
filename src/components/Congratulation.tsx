import {useState} from 'react'

type Props = {
    roll: number,
    time: number
    resetGameHandler: any
}

function Congratulation({roll, time, resetGameHandler}: Props) {
    document.body.classList.add('backdrop')
    const [modal, setModal] = useState(true)
    
    return(
        <>
        <div className={`congratulation ${modal ? 'open' : ''}`}>
            <h3>Congratulations!</h3>
            <span>You resolved this puzzle in {roll} rolls and {time} seconds</span>
            <button className="btn btn--reset" onClick={() => {setModal(!setModal); resetGameHandler()}}>Start again</button>
        </div>
        <div className='modal-backdrop'></div>
        </>
    )
}
export default Congratulation