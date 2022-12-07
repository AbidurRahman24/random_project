import React, { useState } from 'react';
import './Temp.css'
const Temp = () => {
    const [temperatureValue, setTemperatureValue] = useState(10)
    const [temperatureColor, setTemperatureColor] = useState("cold");
    const increaseTemperature = () =>{
        if(temperatureValue >= 30) return
        const newTemperature = temperatureValue + 1
        setTemperatureValue(newTemperature)
        if (newTemperature >= 20){
            setTemperatureColor('neutral')
        }
        if (newTemperature >= 25){
            setTemperatureColor('hot')
        }
    }
    const decreaseTemperature = () =>{
        if(temperatureValue < 0) return
        const newTemperature = temperatureValue - 1
        setTemperatureValue(newTemperature)
        if (newTemperature < 20){
            setTemperatureColor('neutral')
        }
        if (newTemperature < 15){
            setTemperatureColor('cold')
        }
    }

    return (
            <div className='app-container'>
            <div className="temperature-display-container">
                <div className={`temperature-display ${temperatureColor}`}>
                    {temperatureValue}°C
                </div>
            </div>
            <div className='button-container'>
                <button className='temp-button text-center' onClick={increaseTemperature}>+</button>
                <button className='temp-button text-center' onClick={decreaseTemperature}>-</button>
            </div>
        </div>
    );
};
export default Temp;