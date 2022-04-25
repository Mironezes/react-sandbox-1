
import Select from "react-select"

type Props = {
    difficultyHandler: any
    difficulty: any
}

function Difficulty({difficultyHandler, difficulty}:Props) {

    let options = [
        { value: 4, label: "Easy" },
        { value: 6, label: "Normal" },
    ]
    let selected = {value: 6, label: "Normal"}

    return(
        <label id="difficulty">
            <strong>Mode:</strong>
            <Select 
                onChange={difficultyHandler} 
                defaultValue={selected}
                options={options} />
        </label>
    )
}
export default Difficulty