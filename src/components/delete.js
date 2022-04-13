import React, { useState } from 'react'
import './delete.css'
import { deleteData } from './data';

function Delete() {

    const [rows, setRows] = useState({
    });
    const {} = rows;

    const changeHandler = e => {
        setRows({ ...rows, [e.target.name]: [e.target.value] });
    };
    const submitHandler = async (e) => {
        e.preventDefault()
        let response = await deleteData(rows)
        
    };

    return (
        <div className='add-modal-bg'>
        <div className='modal-delete'>
            <p className='head' style={{ fontSize: '20px', paddingleft:'20px', color: 'white'}}>Delete Records ?</p>
            <p className='delete-head'>Are you sure you want to delete these record[s] ?</p>
            <div className='footer'>
                <button className='del-bt' onClick=''>CANCEL</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='del-bt'>DELETE</button>
            </div>
        </div>
        </div>
    )
}

export default Delete