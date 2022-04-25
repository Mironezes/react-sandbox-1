type Props = {
    rollDices: any,
    text: string
}

function Button({rollDices, text}: Props) {
    
    return(
        <button className="roll-btn" onClick={rollDices}>{text}</button>
    )
}

export default Button