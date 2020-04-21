import React from "react";
import {connect} from 'react-redux'

const List = ({items}) => {
    
  return (
    <div>
      {items.map( elt => {
        return (
          <div className="list-items">
            <button className="btn">Edit</button>
            <button className="btn" onClick={()=>{this.props.remove(elt.id)}}>Delete</button>
            <h4>{elt.text}</h4>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps= (state) => ({
  items: state.items
})

const mapDispatchToProps=(dispatch)=>{
  return {
    remove:(id)=>{
      dispatch ({type:'ADD_INPUT',payload:id})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (List);
