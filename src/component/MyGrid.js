import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
//import './App.css';
import { getData } from './data';

const columns = [
    { field: 'sl_no', headerName: 'Sl no', width: 50 },
    { field: 'business_code', headerName: 'Business Code', width: 80 },
    { field: 'cust_number', headerName: 'Cust Number', width: 100 },
    { field: 'clear_date', headerName: 'Clear Date', width: 100 },
    { field: 'buisness_year', headerName: 'Buisness Year', width: 80 },
    { field: 'doc_id', headerName: 'Doc Id', width: 100 },
    { field: 'posting_date', headerName: 'Posting Date', width: 100 },
    { field: 'document_create_date', headerName: 'Document Create Date', width: 100 },
    { field: 'due_in_date', headerName: 'Due Date', width: 100 },
    { field: 'invoice_currency', headerName: 'Invoice Currency', width: 80 },
    { field: 'document_type', headerName: 'Document Type', width: 100 },
    { field: 'posting_id', headerName: 'Posting Id', width: 70 },
    { field: 'total_open_amount', headerName: 'Total Open Amount', width: 100 },
    { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 100 },
    { field: 'cust_payment_terms', headerName: 'Cust Payment Terms', width: 80 },
    { field: 'invoice_id', headerName: 'Invoice Id', width: 100 },
];



export default function TableData() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchDataApi() {
            setData(await getData())
        }
        fetchDataApi()
    }, [])
    return (
        <>
            <div style={{ height: 350, width: '100%' }}>
                <DataGrid
                    rows={data}
                    getRowId={(r) => r.sl_no}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20, 50]}
                    checkboxSelection
                    disableSelectionOnClick
                    rowHeight={40}
                    style={{ color: "white", backgroundColor: "transparent" }}
                />
            </div>
        </>
    )
}