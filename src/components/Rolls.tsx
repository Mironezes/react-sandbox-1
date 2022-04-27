type Props = {
    roll: number,
    translation: Function
}

function Rolls({roll, translation}: Props) {
    
    return(
        <>
            <span className="rolls-count">{translation("roll-btn.label")}: {roll}</span>
        </>
    )
}

export default Rolls