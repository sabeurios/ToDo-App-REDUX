export const setInput = (payload) => {
    return {
        type: "SET_INPUT",
        payload
    }
}

export const addInput = (payload) => {
    return {
        type: "ADD_INPUT",
        payload
    }
}

export const removeInput = (payload) => {
    return {
        type:"REMOVE_INPUT",
        payload
    }
}

export const editInput = (payload) => {
    return {
        type:"EDIT_INPUT",
        payload
    }
}