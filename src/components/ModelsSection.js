import React from 'react';
import './ModelsSection.css';

import BMWM5Image from '../images/bmwm5.jpg';
import BMWX5Image from '../images/bmwx5.jpg';
import BMWM4Image from '../images/bmwm4.jpg';
import BMWM3Image from '../images/bmwm3.jpg';

const modelsData = [
    { name: 'BMW M5', image: BMWM5Image },
    { name: 'BMW X5', image: BMWX5Image },
    { name: 'BMW M4', image: BMWM4Image },
    { name: 'BMW M3', image: BMWM3Image },
];

const ModelsSection = () => {
    return (
        <div id="models-section" className="models-section">
            <h2 className="best-sellers-title">BEST SELLERS</h2>
            <div className="model-cards">
                {modelsData.map((model, index) => (
                    <div key={index} className="model-card">
                        <img src={model.image} alt={model.name} />
                        <h2>{model.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ModelsSection;
