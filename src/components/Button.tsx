type Props = {
    rollDices: any,
    text: string
}

function Button({rollDices, text}: Props) {
    
    return(
        <button className="btn btn--roll" onClick={rollDices}>{text}</button>
    )
}

export default Button