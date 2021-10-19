import {useDispatch} from "react-redux";
import {StopTimer} from "../store/time.actions";

export const Stop = () => {
    const dispatch = useDispatch()
    const handleStop = () => {
        dispatch(StopTimer())
    }
    return(
        <div>
            <button className='btn btn-danger' onClick={handleStop}>Stop</button>
        </div>
    )
}
