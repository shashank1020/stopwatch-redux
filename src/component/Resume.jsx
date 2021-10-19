import {useDispatch} from "react-redux";
import {ResumeTimer} from "../store/time.actions";

export const Resume = () => {
    const dispatch = useDispatch()
    const handleResume = () => {
      dispatch(ResumeTimer())
    }
    return(
        <div>
            <button className='btn btn-success' onClick={handleResume}>Resume</button>
        </div>
    )
}
