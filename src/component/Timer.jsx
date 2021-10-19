import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {StartTimer, UpdateTimer} from "../store/time.actions";

export const Timer = () => {
    const time = useSelector(state => state.time)
    const isStart = useSelector(state => state.isStart)
    const dispatch = useDispatch()
    useEffect(() => {
        let interval = null
        if(isStart) {
            dispatch(StartTimer())
            interval = setInterval(()=> {
                dispatch(UpdateTimer())
            }, 10)
        }
        return () => clearInterval(interval)
    }, [isStart, dispatch])
    return(
        <div>
            <span className='main-time'>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span className='main-time'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span className='main-time'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span className='main-time red'>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    )
}
