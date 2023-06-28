import React, { useState } from 'react'
import {  Space, Checkbox } from 'antd';
 const Completed = (props) => {
    const {todoList,handleTodo} = props
    const newTodoList = todoList.filter(item => item.isDoing === true)

    const handleDelete = (id) => {
      props.handleDeleteTodo(props.id)
     
    }

  return (
    <Checkbox.Group >
    <Space direction="vertical">
      {newTodoList.map((item,index)=>(<Checkbox onChange={()=>handleTodo (item)} className={`${item.isDoing ? "checked " : ""}`} checked={item.isDoing} value={item.id}>{item.title} <i style={{marginLeft:'5px'}} className="fa-regular fa-trash-can" /></Checkbox>)  )} 
      {/* mỗi item nên có 1 id riêng biệt */}
      <button onClick={handleDelete}>
      <i class="fa-solid fa-trash-arrow-up"></i>
      </button>
    
      </Space>
      
  </Checkbox.Group>
  )
}
export default Completed