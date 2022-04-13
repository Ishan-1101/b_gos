import React, { useState } from 'react'
import './edit.css'
import { TextField } from '@mui/material'
import axios from 'axios'
import {editData} from './data'


function Edit(props) {
    
    const [rows, setRows] = useState({
        invoice_currency: '', cust_payment_terms: ''
    });
    const {invoice_currency, cust_payment_terms} = rows;

    const changeHandler = e => {
        setRows({ ...rows, [e.target.name]: [e.target.value] });
    };
    const submitHandler = async (e) => {
        e.preventDefault()
        let response = await editData(rows)
        
    };

    return (
        <div className='add-modal-bg'>
        <div className='modal-edit'>
            <p className='edit-head'>Edit</p>
            <div className='add-modal-content'>
            <div>
            <TextField
                    label='Invoice Currency'
                    className='textbox add'
                    variant='outlined'
                    size='small'
                    name='invoice_currency'
                    value={invoice_currency}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Customer Payment Terms'
                    className='textbox add'
                    variant='outlined'
                    size='small'
                    name='cust_payment_terms'
                    value={cust_payment_terms}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
            </div>
            </div>
            <div className='footer'>
                <button className='edit-bt' onclick={submitHandler}>EDIT</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='edit-bt'>CANCEL</button>
            </div>
        </div>
        </div>
    )
}

export default Edit