import Dice from "./Dice"

type Props = {
    numbers: any[],
    diceClickHandler: any
}

function Dices({numbers, diceClickHandler}: Props) {
   const dicesList = numbers.map(number => {
    return (
        <Dice 
            key={number.id}  
            data={number}
            diceClickHandler={() => diceClickHandler(number.id)}
        /> 
   )})

    return(
        <div className="dices">
            {dicesList}
        </div>
    )
}

export default Dices