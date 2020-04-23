import React,{useState} from "react";
import { connect } from "react-redux";
import {removeItem,editItem,completeItem,updateItem} from "../Actions/action"

const List = ({ items,removeItem,editItem,completeItem,updateItem }) => {
 
  const [updatedItem, setUpdatedItem] = useState("")

  return (
    <div className="main">
      <h2 classe="items">Let's get some work done!</h2>
      <hr/>
        {items.map(item => 
          (
          <div>{item.isEditable?
            ( 
              <div className="update">
                <input  className="form-control"
                        type="texte" 
                        placeholder="Enter new task" 
                        value={updatedItem}
                        onChange={(event)=>setUpdatedItem(event.target.value)}
                />
                <button className="btn btn-success"
                        onClick={()=> { updateItem({id:item.id,text:updatedItem});
                                        alert("You changed "+item.text+" to "+updatedItem)}
                                      } 
                >
                  Update
                </button>
              </div>
            )
            :
              (<div key={item.id} className="list-items">
                  <button className={`${!item.isCompleted?"btn btn-primary":"btn btn-secondary"}`}
                          onClick={()=>completeItem(item.id)}>
                    {item.isCompleted?"Undo":"Complete"}
                  </button>
                  <button className="btn btn-danger" 
                          onClick={() => {removeItem(item.id);alert("You just deleted: "+item.text)}}>
                    Delete
                  </button>
                  <button className="btn btn-success" 
                          onClick={() => {editItem(item.id);setUpdatedItem(item.text)}}>
                    Edit
                  </button>
                  <h4 className="item"
                      style={{ textDecoration: item.isCompleted && "line-through" }}
                  >
                    {item.text}
                  </h4>
              </div>)
          }</div>
          )
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem:   (payload) => dispatch(removeItem(payload)),
    completeItem: (payload) => dispatch(completeItem(payload)),
    editItem:     (payload) => dispatch(editItem(payload)),
    updateItem:   (payload) => dispatch(updateItem(payload))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(List);
