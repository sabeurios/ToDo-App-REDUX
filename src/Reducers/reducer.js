const initialState =  {
                        items: [
                                  { id: 1, text: "item-1", isCompleted: false, isEditable: false },
                                  { id: 2, text: "item-2", isCompleted: false, isEditable: false }, 
                                  { id: 3, text: "item-3", isCompleted: false, isEditable: false }
                                ]
                      };

const reducer = (state = initialState, action) => {
    switch(action.type){
      
      case "ADD_ITEM":
        return {
          items: [...state.items, action.payload]
        };

      case "REMOVE_ITEM":
        return {
          items: state.items.filter(item => item.id !== action.payload)
        };

      case "COMPLETE_ITEM":
          return {
            items: state.items.map(item => 
              item.id === action.payload? 
              {...item, isCompleted:!item.isCompleted}
              :(item))
          };

      case "EDIT_ITEM":
          return {
            items: state.items.map(item=>
              item.id===action.payload?
              { ...item,
                isEditable: !item.isEditable
              }
              :item
            )
          }

      case "UPDATE_ITEM":
          return {
            items: state.items.map(item=>
              item.id===action.payload.id?
              { ...item,
                text: action.payload.text,
                isEditable: !item.isEditable
              }
              :item)
          }     

      default:
        return state 
    }
  }
  export default reducer