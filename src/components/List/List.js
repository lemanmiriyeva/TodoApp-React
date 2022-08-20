import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const List = ({id,text,onDelete}) => {
    return (
        <div className='d-flex align-items-center px-2 py-2 list-item mt-3 mb-3 justify-content-between' >
            <div className='d-flex align-items-center first'>
                <input type={'checkbox'} className='form-control checkbox mr-4' />
                <label>{text}</label>
            </div>
            <RiDeleteBinLine size={'24px'} color={'red'} onClick={()=>onDelete(id)}/>

        </div>
    )
}

export default List
