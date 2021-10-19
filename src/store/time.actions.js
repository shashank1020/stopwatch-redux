export const UPDATE_TIME = '[time] Update'
export const RESET_TIMER = '[time] Reset'
export const RESUME_TIMER = '[time] Resume'
export const START_TIMER = '[time] Start'
export const STOP_TIMER = '[time] Stop'
export const ADD_LAP = 'Add Lap'
export const DELETE_LAP = 'Delete Lap'
export const DELETE_ALL_LAPS = 'Delete all Laps'
export const UpdateTimer = () => {
    return {
        type: UPDATE_TIME
    }
}

export const ResetTimer = () => {
    return {
        type: RESET_TIMER
    }
}

export const ResumeTimer = () => {
    return {
        type: RESUME_TIMER
    }
}

export const StartTimer = () => {
    return {
        type: START_TIMER
    }
}

export const StopTimer = () => {
    return {
        type: STOP_TIMER
    }
}

export const AddLap = () => {
    return {
        type: ADD_LAP
    }
}

export const DeleteLap = (LapId) => {
    return {
        type: DELETE_LAP,
        payload: LapId
    }
}

export const DeleteAllLap = () => {
    return {
        type: DELETE_ALL_LAPS
    }
}
