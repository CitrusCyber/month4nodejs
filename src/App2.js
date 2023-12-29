import React, { useRef, useState } from 'react';

function RefExample() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Сюда писать"
            />
            <button onClick={handleButtonClick}>Показать данные</button>
        </div>
    );
}

export default RefExample;
