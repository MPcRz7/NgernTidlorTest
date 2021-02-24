export const phoneTextSave = (newtext) => {
    return dispatch => {
        dispatch( { type: "Mos2", payload: newtext })
    }
}