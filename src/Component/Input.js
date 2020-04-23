import React, {useState} from "react";
import { connect } from "react-redux";
import {addItem} from "../Actions/action"

const Input = ({addItem}) => {
  const [input, setInput] = useState("")

  // const addNewItem = () => {
  //   addItem({
  //     id:Date.now(),
  //     text:input,
  //     isComleted: false,
  //     isEditable: false
  //   })
  // }
  return (
      <div className="header-input">
        <h1>To-Do-App!</h1>    
        <h4>Add New To-Do</h4>  
        <input  className= "inputItem form-control"
                type="text"
                placeholder="Enter a Task"
                value={input}
                onChange={(event)=>setInput(event.target.value)}
        />
        <button className="btn-add"
                onClick={()=>{addItem({ id:Date.now(),
                                        text:input,
                                        isComleted: false,
                                        isEditable:false});
                              setInput("")}}>
          Add
        </button> 
      </div>
    );
}




export default connect(null,{addItem})(Input); // au lieu de mapDispatchToProps, on peut injecter directement la méthode dans connect
