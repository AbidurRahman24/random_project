import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './advice.module.css'
const Advice = () => {
    const [advice, setAdvice] = useState([])
    useEffect(()=>{
      fatch()
    },[])
    const fatch = ()=>{
      axios.get('https://api.adviceslip.com/advice')
  .then((response)=> {
    // handle success
    setAdvice(response.data.slip.advice);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    }
    const handleClick = () =>{
      fatch()
    }
    return (
      <div className={style.adviceApp}>
      <div className={style.adviceCard}>
        <p className={style.header}>{advice}</p>
        <button className={style.adviceButton} onClick={handleClick}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
    );
};

export default Advice;