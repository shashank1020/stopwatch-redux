import './App.css';
import {Timer} from "./component/Timer";
import {Start} from "./component/Start";
import {Stop} from "./component/Stop";
import {Resume} from "./component/Resume";
import {Reset} from "./component/Reset";
import {useSelector} from "react-redux";
import {Lap} from "./component/Lap";
import {LapButton} from "./component/LapButton";
import {useEffect, useState} from "react";

function App() {
    const [ownerText, setOwnerText] = useState('')
    const [changeText, setText] = useState(false)
    useEffect(() => {
        changeText ? setTimeout(() => setOwnerText('Go to Github'), 500): setOwnerText('Shashank Maurya')
    },[changeText])
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
            {lap.length !== 0 && <Lap/>}
            <div className="owner">
                Developed by- <span><a
                onMouseOver={() => setText(true)}
                onMouseLeave={() => setText(false)}
                href='https://github.com/shashank1020/stopwatch-redux'
                target='_blank' rel="noopener noreferrer"
                className='owner-link'>{ownerText}</a></span>
            </div>
        </div>
    );
}

export default App;
