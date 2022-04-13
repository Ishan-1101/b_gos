import React, { useState } from 'react'
import './search.css'
import { TextField } from '@mui/material'
import axios from 'axios'
import {searchData} from './data'


function Search() {

    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState({
        doc_id: '', invoice_id: '', cust_number: '', buisness_year: ''
    });
    const { doc_id, invoice_id, cust_number, buisness_year} = rows;

    const changeHandler = e => {
        setRows({ ...rows, [e.target.name]: [e.target.value] });
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
      };
    const submitHandler = async (e) => {
        e.preventDefault()
        let response = await searchData(rows)
        handleClose();
    };

    return (
        <div className='add-modal-bg'>
        <div className='modal-search'>
            <p className='edit-head'>Advance Search</p>
            <div className='add-modal-content'>
            <div>
                <TextField
                        label='Document Id'
                        className='textbox add'
                        variant='standard'
                        size='small'
                        name='doc_id'
                        value={doc_id}
                        onChange={changeHandler}
                        sx={{ m: 2 }}
                    />
                <TextField
                    label='Invoice Id'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='invoice_id'
                    value={invoice_id}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Customer Number'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='cust_number'
                    value={cust_number}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
                <TextField
                    label='Business Year'
                    className='textbox add'
                    variant='standard'
                    size='small'
                    name='buisness_year'
                    value={buisness_year}
                    onChange={changeHandler}
                    sx={{ m: 2 }}
                />
            </div>
            </div>
            <div className='footer'>
                <button className='search-bt' onClick={submitHandler}>Search</button> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='search-bt'>CANCEL</button>
            </div>
        </div>
        </div>
    )
}

export default Search