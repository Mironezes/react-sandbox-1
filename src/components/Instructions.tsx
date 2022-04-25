function Instructions() {
    return(
        <>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to 
        freeze it at its current value between rolls.</p>
        <label id="difficulty">
            <strong>Mode</strong>:
            <select name="difficulty">
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
            </select>
        </label>
        </>
    )
}
export default Instructions