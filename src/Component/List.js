import React from "react";
import {connect} from 'react-redux'

const List = ({items}) => {
    
  return (
    <div>
      {items.map((elt) => {
        return (
          <div className="list-items">
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
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

export default connect(mapStateToProps,null) (List);
