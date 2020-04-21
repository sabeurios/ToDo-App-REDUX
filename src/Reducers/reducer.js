const initialState =   {
                        items:  [ 
                                  {id:1, text:"item-1"},
                                  {id:2, text:"item-2"},
                                  {id:3, text:"item-3"}
                                ],
                        input: "",
                    }
const reducer = (state=initialState,action)=>{
    if(action.type==='SET_INPUT'){
        return action.value
      }
    if(action.type==='ADD_INPUT'){
      return state=[...state,action.value]
    }
    if(action.type==='REMOVE_INPUT'){
      return state.filter(el=>el.id!==action.id)
    }
    if(action.type==='EDIT_INPUT'){
        return null
      }
    return state
  }
  export default reducer 