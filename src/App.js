import React, { useEffect, useState } from 'react';

function EffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Счетчик: ${count}`;
    });

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Увеличить на 1
            </button>
            <button onClick={handleReset}>Сбросить</button>
        </div>
    );
}

export default EffectExample;
