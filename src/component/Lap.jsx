import {useDispatch, useSelector} from "react-redux";
import {DeleteAllLap, DeleteLap} from "../store/time.actions";

export const Lap = () => {
    const laps = useSelector(state => state.lap)
    const dispatch = useDispatch()
    const deleteLap = (LapId) => {
        dispatch(DeleteLap(LapId))
    }
    const deleteAllLaps = () => {
        dispatch(DeleteAllLap())
    }

    return (
        <div>
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Time</th>
                    <th scope="col" width='100px'><button className="btn btn-dark" onClick={deleteAllLaps}>Delete All</button></th>
                </tr>
                </thead>
                <tbody>
                {laps.map(lap => {
                        return (
                            <tr>
                                <th scope="row">{lap.id}</th>
                                <td>
                                    {lap.time > 3600000 && <span>{("0" + Math.floor((lap.time / 3600000) % 24)).slice(-2)}:</span>}
                                    {lap.time > 60000 && <span>{("0" + Math.floor((lap.time / 60000) % 60)).slice(-2)}:</span>}
                                    <span>{("0" + Math.floor((lap.time / 1000) % 60)).slice(-2)}:</span>
                                    <span>{("0" + ((lap.time / 10) % 100)).slice(-2)}</span>
                                </td>
                                <td>
                                    <button onClick={() => deleteLap(lap.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    )
}
