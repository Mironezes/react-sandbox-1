type Props = {
    roll: number
}

function Rolls({roll}: Props) {
    
    return(
        <>
            <span className="rolls-count">Current roll: {roll}</span>
        </>
    )
}

export default Rolls