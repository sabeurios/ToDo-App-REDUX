  export const addItem = payload => {
    return {
      type: "ADD_ITEM",
      payload
    }
  }

  export const removeItem = payload => {
    return {
      type: "REMOVE_ITEM",
      payload
    }
  }

  export const completeItem = payload => {
    return {
      type: "COMPLETE_ITEM",
      payload
    }
  }
  
  export const editItem = payload => {
    return {
      type: "EDIT_ITEM",
      payload
    }
  }

  export const updateItem = payload => {
    return {
        type: "UPDATE_ITEM",
        payload
    }
  }