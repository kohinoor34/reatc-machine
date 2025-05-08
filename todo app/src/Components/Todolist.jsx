import React, { useState } from 'react'
import "./TodoList.css"

const Todolist = () => {
  const [input, setInput] = useState("")
const [todolist, setTodolist] = useState([])
console.log(todolist);



function addtodo(){
  if(input.trim() == "")return
  const item = {
    id:todolist.length+1,
    text:input.trim(),
    completed: false 

  }

  setTodolist(prev=>[...prev,item])
  setInput("")
}


 const toggleCompleted = (id)=>{
setTodolist(todolist.map(t=>{
  if(t.id === id){
 return{
  ...t,
  completed:!t.completed
 }
  }
  else{
    return t;
  }
}))
}

const deleteTodo = (id)=>{
  setTodolist(todolist.filter(t=>t.id !== id))
}

  return (
    <div>
    
       <input type="text" placeholder='Enter Your Todo Here'
        value={input} onChange={e=>setInput(e.target.value)} /> 

        <button  className ="btn" onClick={()=>addtodo()}>Add</button>
        <ul className='ul-list'>{todolist.map(t=><li key={t.id}>
          <input type="checkbox" checked={t.completed} onChange={()=>toggleCompleted(t.id)}
           />
          <span className={t.completed? "strikethrough":''}>{t.text}</span>
          <button onClick={()=>deleteTodo(t.id)}>delete</button>
        </li>)}</ul>
    </div>
  )
}

export default Todolist