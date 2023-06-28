import React, { useState, useEffect } from 'react';
import { Tabs,Input,Button, Radio, Space, Checkbox } from 'antd';
import './App.css';
import Completed from './components/Completed';
import All from './components/All';
import Active from './components/Active';




const App = () =>{
  const storageItem = JSON.parse(localStorage.getItem("todo"));
  const [todo, setTodo] = useState(storageItem ?? []);
  
  // const [todoItem, setTodoItem] = useState(storageItems ?? []);
  // const [todo,setTodo] = useState([
  //   {
  //     id:1,
  //     title: 'làm việc 1',
  //     isDoing : false,
  //   },
  //   {
  //     id:2,
  //     title: 'làm việc 2',
  //     isDoing : false,
  //   }
  // ])
  
  
const [title,setTitle] = useState('')

  const handleAdd = () => {
    
    const newTodo = {
      id: Math.floor(Math.random() * 16777215).toString(16),
      isDoing: false,
      title: title,
    }
    setTodo([...todo,newTodo])
  }
  const handleChangeAll = (event) => {
   setTitle(event.target.value)

  }
 
  const handleTodo = (i) => {
    const a = todo.map(item => {if (item.id === i.id){
      return {...item,isDoing: !item.isDoing}
    } else {
      return item
    }})
  setTodo(a)
  }
// xoá all
 const handleDeleteTodo = () => { 
  setTodo([]);
  console.log('ple');
 }

// useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem('todo'));
//   if (storedTodos) {
//     setTodo(storedTodos);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('todo', JSON.stringify(todo));
// }, [todo]);

// useEffect(() => {
//   const handleBeforeUnload = () => {
//     localStorage.setItem('todo', JSON.stringify(todo));
//   };

//   window.addEventListener('beforeunload', handleBeforeUnload);

//   return () => {
//     window.removeEventListener('beforeunload', handleBeforeUnload);
//   };
// }, [todo]);

// Saving in LocalStorage
const saveLocalTodos = () => {
  localStorage.setItem("todo", JSON.stringify(todo));
};
const getLocalTodos = () => {
  const itemJSON = JSON.stringify(todo);
  localStorage.setItem("item", itemJSON);
};

useEffect(() => {
  getLocalTodos();
}, []);

useEffect(() => {
  saveLocalTodos();
}, [todo]);

   return (
  <>
  <div className='container'>
  <div className='mt-2' style={{display:'flex'}}>
    <Input onChange={handleChangeAll} placeholder="add details" /> 
    <Button onClick={handleAdd}   style={{marginLeft:'5px'}} type="primary">Add</Button>
    </div>
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'All',
        key: '1',
        children: <All todoList ={todo}
        handleTodo ={handleTodo}/>
      },
      {
        label: 'Active',
        key: '2',
        children: <Active todoList ={todo}
        handleTodo ={handleTodo}/>
      
      },
      {
        label: 'Completed',
        key: '3',
        children: <Completed todoList ={todo}
        handleTodo ={handleTodo}
        handleDeleteTodo = {handleDeleteTodo}
        />
      },
    ]}
  />
  {/* <Tabs  defaultActiveKey="1"/> */}
  
  
  </div>
  </>
);
}

export default App;
