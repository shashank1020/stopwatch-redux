import './App.css';
import {Timer} from "./component/Timer";
import {Start} from "./component/Start";
import {Stop} from "./component/Stop";
import {Resume} from "./component/Resume";
import {Reset} from "./component/Reset";
import {useSelector} from "react-redux";
import {Lap} from "./component/Lap";
import {LapButton} from "./component/LapButton";

function App() {
    const {isStart, time, lap} = useSelector(state => state)
    return (
        <div className="App">
            <div className='d-flex justify-content-evenly helper-width'>
                <span className='m-3 text-muted text-sm'>hh:</span>
                <span className='m-3 text-muted text-sm'>mm:</span>
                <span className='m-3 text-muted text-sm'>s:</span>
                <span className='m-3 text-muted text-sm'>ms</span>
            </div>
            <Timer/>
            {!isStart && time === 0 && <Start/>}
            <div className='inner'>{isStart && <Stop/>}</div>
            <div className="inner">{isStart && <LapButton/>}</div>
            <div className='inner'>{!isStart && time !== 0 && <Resume/>}</div>
            <div className='inner'>{!isStart && time > 0 && <Reset/>}</div>
            {lap.length != 0 && <Lap/>}
        </div>
    );
}

export default App;
