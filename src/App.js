import { useState } from "react"

function ColorToggleForm() {
    const [color1, setColor1] = useState('red')
    const [color2, setColor2] = useState('blue')

    const toggleColors = () => {
        setColor1(color2)
        setColor2(color1)
    }

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: color1,
                    cursor: 'pointer'
                }}
                onClick={toggleColors}
            ></div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: color2,
                    cursor: 'pointer'
                }}
                onClick={toggleColors}
            ></div>
        </div>
    )
}

export default ColorToggleForm
