import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './style.scss';
import TodoItem from './TodoItem';
// import {Route , BrowserRouter as Router, switch } from 'react-router-dom'
function App() {

  const [state, setState] =useState({
    todo: "",
    todoList: []
  })

  const {todo, todoList} = state

  const handleAdd = () => {
    const list = todoList

    if(todo.length > 0){
      list.push({item: todo, completed: false, id: list.length})
      setState({todo: "", todoList: list})
    }else{
      alert("cant add empty String")
    }
    
   

    
    
  }


  const handleOnChange = (e) =>{
   const {name,value} = e.target
    
   setState({...state, [name]: value})
  }

console.log(state)

const handleCheck = (e) => {
  const index = e.target.id
  const newList = [...state.todoList]

  console.log("new list",newList)

  
  if(newList[index].completed){
    newList[index] = {...newList[index], completed: false}
    setState({...state, todoList: newList})
  }else{
    newList[index] = {...newList[index], completed: true}

    setState({...state, todoList: newList})
  }

}


const url = window.location.pathname 
// }
  return (
    <Router>
    <div className="App">
      <div className="main">
        <div className="container">

      <h1 className="title">#todo</h1>

      <nav className="nav">
        <ul className="nav-list">
        <NavLink className="nav-list__item" activeClassName="active" exact  to="/"> All</NavLink>
        <NavLink className="nav-list__item" activeClassName="active"  to="/active"> Active</NavLink>
        <NavLink className="nav-list__item" activeClassName="active"  to="/completed"> Completed</NavLink>  
        </ul>
      </nav>


    <div className="form-control">
    <input className="input" onChange={(e)=>handleOnChange(e)} 
      name="todo"
      value={todo}
      
      type="text"/> 
      <button className="btn btn-primary" onClick={handleAdd}>add</button>
    </div>

     
      <Route path="/" exact>

      
       
         <TodoItem todoList={todoList} handleCheck={handleCheck} />
       </Route>
       <Route path="/active" exact>
        
         <TodoItem todoList={todoList.filter(item=> item.completed===false)} handleCheck={handleCheck} />       
      
         </Route>
         <Route path="/Completed" exact>
  
         <TodoItem todoList={todoList.filter(item=> item.completed===true)} handleCheck={handleCheck} />   
         </Route>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
