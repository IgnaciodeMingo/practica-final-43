import {useState} from 'react';

const Play = () => {
  const [numero, setNumero] = useState(0);
  const dec = () => {
    setNumero(prev => prev-1);
  }
  const inc = () => {
    setNumero(prev => prev+1);
  }
  const retd = () => {
    setNumero(prev => 0);
  }
    return(
    <div>
      <h1>{numero}</h1>

      <button onClick={inc}>+</button>

      <button onClick={dec}>-</button>

      <button onClick={retd}>--</button>

    </div>

    );

};

export default Play;
