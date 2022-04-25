import { nanoid } from "nanoid";

type Props = {
    data: any,
    diceClickHandler: any
}

function Dice({data, diceClickHandler}: Props) {

    let diceValue = [];
    for(let i = 1; i <= data.value ;i++) {
        diceValue.push(<span key={nanoid()}></span>)
    }

    return(
        <div 
            onClick={diceClickHandler} 
            className={`dice dice-${data.value} ${data.isHeld ? "held" : ''}`}
        >
            {diceValue}
        </div>
    )
}

export default Dice