import React, { useState } from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Input = ({todos,setTodos}) => {
    const[value,setValue]=useState("")
    const onChangeHandler=(e)=>{
        setValue(e.target.value)
    }
    const addTodo=(e)=>{
        e.preventDefault()
        setTodos([...todos,{
            id:Date.now(),
            text:value
        }]);
        setValue("")

    }
    const errorMessage=()=>{
        return toast("Wow so easy!");
    }
    return (
        <div>
            <form className='mt-4' onSubmit={value.length>0 ? addTodo : errorMessage}>
                <div className='d-flex justify-content-between align-items-center' >
                    <input onChange={onChangeHandler} value={value} type="text" className="form-control textinput" id="exampleFormControlInput1" placeholder="Add New Task" />
               <BsFillPlusCircleFill size={'32px'} onClick={value.length>0 ? addTodo : errorMessage}/>
               <ToastContainer />
                </div>
            </form>
        </div>
    )
}

export default Input
