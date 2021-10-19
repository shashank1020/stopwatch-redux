import {useDispatch} from "react-redux";
import {StartTimer} from "../store/time.actions";

export const Start = () => {
    const dispatch = useDispatch()
    const handleStart = () => {
        dispatch(StartTimer())
    }
    return(
        <div>
            <button className='btn btn-primary' onClick={handleStart}>Start</button>
        </div>
    )
}
