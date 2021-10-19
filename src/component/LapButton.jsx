import {useDispatch} from "react-redux";
import {AddLap} from "../store/time.actions";

export const LapButton = () => {
    const dispatch = useDispatch()
    const handleAddLap = () => {
        dispatch(AddLap())
    }
    return(
        <div>
            <button className='btn btn-success' onClick={handleAddLap}>Lap</button>
        </div>
    )
}
