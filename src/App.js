import React , {useState , useMemo , useCallback} from "react";
const Calculator = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    const sum = useMemo(() => {
        console.log("Идет расчет...")
        return number1 + number2;
    }, [number1, number2])

    const handleNumberChange = useCallback((event, number) => {
        const newNumber = event.target.value
        number === 1 ? setNumber1(newNumber) : setNumber2(newNumber)
    }, [])

    return (
        <div>
            <label>
                Number 1:
                <input type="number" value={number1} onChange={(e) => handleNumberChange(e, 1)}/>
            </label>
            <br/>
            <label>
                Number 2:
                <input type="number" value={number2} onChange={(e) => handleNumberChange(e, 2)}/>
            </label>
            <br/>
            <p>Sum: {sum}</p>
        </div>
    )
}

export default Calculator