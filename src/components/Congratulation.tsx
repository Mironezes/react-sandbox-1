import {useState} from "react"
import Button  from "@mui/material/Button"

type Props = {
    roll: number,
    timer: number
    resetGameHandler: any,
    translation: Function,
}

function Congratulation({roll, timer, translation, resetGameHandler}: Props) {
    document.body.classList.add("backdrop")
    const [modal, setModal] = useState(true)
    
    return(
        <>
        <div className={`congratulation ${modal ? "open" : ""}`}>
            <h3>{translation("congratulation.label")}</h3>
            <span>{translation("completed1.label")} {roll} {translation("completed2.label")} {timer} {translation("completed3.label")}</span>
            <Button 
                className="btn btn--reset"
                onClick={() => {setModal(!setModal); resetGameHandler()}}
            >
                {translation("repeat-game.label")}
            </Button>
        </div>
        <div className="modal-backdrop"></div>
        </>
    )
}
export default Congratulation