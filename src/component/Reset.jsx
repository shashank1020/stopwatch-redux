import {useDispatch} from "react-redux";
import {ResetTimer} from "../store/time.actions";

export const Reset =()=> {
    const dispatch = useDispatch()
    const handleReset = () => {
        dispatch(ResetTimer())
    }
    return(
        <div>
            <button className='btn btn-danger' onClick={handleReset}>Reset</button>
        </div>
    )
}
