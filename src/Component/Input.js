import React from "react";
import {connect} from 'react-redux'

class Input extends React.Component {
  
  render() { 
    return (  
      <div>
        <input  type="text" placeholder="Enter a Task"
                onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <button onClick={()=>{this.props.add(this.props.input)}}>Add</button>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    input:state.input
  }
}

const mapDispatchToProps=(dispatch)=>{
return {
  hundelChange:(target)=>{
    dispatch ({type:'SET_INPUT',value:target.value})
  },
  add:(input)=>{
    let obj={}
    let id=Date.now()
    obj={id,input}
    dispatch ({type:'ADD_INPUT',value:obj})
  }
}
}
export default connect(mapStateToProps,mapDispatchToProps) (Input); 

