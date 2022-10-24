import React, { useState } from 'react';
import './temp.css'
const Temp2 = () => {
    const [temperatureValue,setTemperatureValue] = useState(10)
    const [temperatureColor, setTemperatureColor] = useState('cold')
    const handleIncrese = () =>{
        const newTemperature = temperatureValue + 1
        setTemperatureValue(newTemperature)
        if (newTemperature >= 15){
            setTemperatureColor('hot')
        }
    }
    const handleDecrese = () => {
        const newTemperature =  temperatureValue - 1
        setTemperatureValue(newTemperature)
        if (newTemperature >= 20){
            setTemperatureColor('cold')
        }
    }
    return (
        <div>
            <div className={`temperature-display ${temperatureColor}`}>
                    {temperatureValue}°C
                </div>
            <button onClick={handleIncrese}>add</button>
            <button onClick={handleDecrese}>minus</button>
        </div>
    );
};

export default Temp2;