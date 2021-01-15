import React from 'react'


function TodoItem(props){

  const   {todoList,item,completed,handleCheck, id} = props


    return (
        <ul className="todo__list">

            {
                todoList.length ? todoList.map((item,index)=>{
                    return(
                        <li key={index} className="todo__list-item">
                        <input onChange={handleCheck} className="checkbox" id={item.id} checked={item.completed} type="checkbox"/>
                        <label className="label"  htmlFor={item.id}>{item.item}</label>
                        </li>
                    )
                })

                : <h1 className="notFound">no item found try</h1>
               
            }
              
        </ul>
     
    )
}

export default TodoItem