import {useState} from 'react';
import Timer from './Timer'
import Play from './Play'
import HiScores from './HiScores'
import Score from './Score'

const App = () => {

    return(
    <div>
    <Timer />
    <Play />
    <HiScores />
    <Score />
    </div>

    );

};

export default App;
