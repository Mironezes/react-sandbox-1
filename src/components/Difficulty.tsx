
import Select from "react-select"

type Props = {
    difficultyHandler: any,
    translation: Function
}

function Difficulty({difficultyHandler, translation}:Props) {

    let options = [
        { value: 4, label: translation("easy.label") },
        { value: 6, label: translation("normal.label") },
    ]
    let selected = {value: 6, label: translation("normal.label")}

    return(
        <label id="difficulty">
            <strong>{translation("mode.label")}:</strong>
            <Select 
                onChange={difficultyHandler} 
                defaultValue={selected}
                options={options} />
        </label>
    )
}
export default Difficulty