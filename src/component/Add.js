import React from 'react'
import { TextField } from '@mui/material'

function Add() {
    return (
        <div className="add-modal-bg">
        <div className="add-modal">
            <div className="add-modal-header">
                Add
            </div>
            <div className="add-modal-content">
                <div className="business-code">
                    <input type="modal-txt" id="bsc_cde" name="business_code" placeholder='Business Code' required/>
                </div>
                <div className="customer-no">
                    <input type="modal-txt" id="cust_no" name="cust_number" placeholder='Customer Number' required/>
                </div>
                <div className="clear-date">
                    <label for="clear-date">Clear Date</label>
                    <input type="date" id="clr_date" name="clear_date" placeholder="MM/DD/YYYY"
        onfocus="(this.type='date')"
        onblur="(this.type='text')" required/>
                </div>
                <div className="business-year"> 
                    <input type="number" id="buis_yr" name="buisness_year" placeholder='Business Year'/>
                </div>
                <div className="doc-id">
                    <input type="modal-txt" id="dc_id" name="doc_id" placeholder='Document id' required/>
                </div>       
                <div className="posting-date">
                    <label for="posting-date">Posting Date </label>
                    <input type="date" id="post_dt" name="posting_date"  placeholder="" onfocus="(this.type = 'date')" required/>
                </div>
                <div className="document-create-date">
                    <label for="document-create-date">Document Create Date </label>
                    <input type="date" id="dc_dt" name="document_create_date" required/>
                </div>
                <div className="due-in-date">
                    <label for="due-in-date">Due Date </label>
                    <input type="date" id="du_dt" name="du_in_date" required/>
                </div>
                <div className="invoice-currency">
                    <input type="modal-txt" id="invc_cur" name="invoice_
                    currency" placeholder='Invoice Currency' required/>
                </div> 
                <div className="document-type">  
                    <input type="modal-txt" id="dc_typ" name="document_type" placeholder='Document Type' required/>
                </div> 
                <div className="posting-id">
                    <input type="modal-txt" id="pst_id" name="posting_id" placeholder='Posting id' required/>
                </div> 
                <div className="total-open-amount">
                    <input type="number" id="t_amnt" name="total_open_amount" placeholder='Total open amount' required/>
                </div> 
                <div className="baseline-create-date">
                    <label for="baseline-create-date">Baseline Create Date </label>
                    <input type="date" id="bc_dt" name="baseline_create_date" required/>
                </div>
                <div className="customer-payment-terms">
                    <input type="customer-payment-terms" id="cust_term" name="cust_payment_terms" placeholder='Customer Payment Terms' required/>
                 </div> 
                 <div className="invoice-id">
                    <input type="invoice-id" id="invc_id" name="invoice_id" placeholder='Invoice Id' required/>
                 </div> 
            </div>
            <div className="add-modal-footer">
                <button className="modal-add-btn" onClick="addInvoice()"> 
                  ADD
                </button>
                <button className="modal-cancel-btn">
                  CANCEL
                </button>
            </div>
        </div>
    </div>)
}

export default Add