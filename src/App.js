import React from 'react';
import './App.css';
import Input from './Component/Input';
import List from './Component/List';


const App = (props) => {
   
  return (
          <div className="App">
            <header>
              <h1>To-Do-App!</h1>    
              <h4>Add New To-Do</h4>  
              <Input/>
           </header>
           <div className="main">
              <h2 classe="items">Let's get some work done!</h2>
              <hr/>
              <List/>
           </div>
      </div>
  )
} 
export default App
