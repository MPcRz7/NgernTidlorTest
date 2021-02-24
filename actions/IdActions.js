export const idTextSave = (newtext) => {
    return dispatch => {
        dispatch( { type: "Mos", payload: newtext })
    }
}