import React, { useState } from "react";

function Clock(props) {
  const [time,setTime] = useState({date:new Date()});
  let timer;
  const tick = () => {
    timer = setInterval(() => {
      setTime({date:new Date()})
    },1000)
  }
  const remove = () => {

    clearInterval(timer);
    console.log('work')
  }
  tick();
  return(
    <div>
    <h1>Привет, мир!</h1>
    <h2>Сейчас {time.date.toLocaleTimeString()}.</h2>
    <button onClick = {remove}>remove</button>
  </div>
  )
}


export default Clock;