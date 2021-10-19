import {
    ADD_LAP,
    AddLap, DELETE_ALL_LAPS,
    DELETE_LAP,
    RESET_TIMER,
    RESUME_TIMER,
    START_TIMER,
    STOP_TIMER,
    UPDATE_TIME
} from "./time.actions";

const initState = {
    time: 0,
    isStart: false,
    lap: [
        { id: 1, time: 4000 },
        { id: 2, time: 70000 }
    ],
}

export const timeReducer = (state=initState, action) => {
    switch (action.type) {
        case START_TIMER:
            return { ...state, isStart: true }
        case UPDATE_TIME:
            return { ...state, time: state.time + 10 }
        case RESUME_TIMER:
            return { ...state, isStart: true}
        case STOP_TIMER:
            return { ...state, isStart: false}
        case RESET_TIMER:
            return { ...state, time: 0, isStart: false}
        case ADD_LAP:
            const newID = state.lap[0] !== undefined ? state.lap[state.lap.length - 1].id + 1 : 1
            const newLap = { id: newID, time: state.time }
            return { ...state, lap: state.lap.concat(newLap) }
        case DELETE_LAP:
            const lap = state.lap.filter(lap => lap.id !== action.payload)
            return { ...state, lap }
        case DELETE_ALL_LAPS:
            return { ...state, lap: [] }
        default:
            return state
    }
}
