import {useState} from 'react';

const Timer = () => {
  const [time, setTime] = useState(60);


setInterval(()=>{

  setTime(time-1);
}, 1000);
    return(
          <h2>{time}</h2>
        );
};
export default Timer;
