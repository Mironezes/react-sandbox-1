import {useState} from "react"
import Button  from "@mui/material/Button"

type Props = {
    roll: number,
    timer: number
    resetGameHandler: any
}

function Congratulation({roll, timer, resetGameHandler}: Props) {
    document.body.classList.add("backdrop")
    const [modal, setModal] = useState(true)
    
    return(
        <>
        <div className={`congratulation ${modal ? "open" : ""}`}>
            <h3>Congratulations!</h3>
            <span>You resolved this puzzle in {roll} rolls and {timer} seconds</span>
            <Button 
                className="btn btn--reset"
                onClick={() => {setModal(!setModal); resetGameHandler()}}
            >
                Start again
            </Button>
        </div>
        <div className="modal-backdrop"></div>
        </>
    )
}
export default Congratulation