import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import  MyGrid  from './components/MyGrid';
import mainlogo from './Group 20399.svg'
import mainlogo1 from './logo.svg'
import Popup from 'reactjs-popup'
import Add from './components/Add'
import Edit from './components/edit';
import Delete from './components/delete';
import  Search  from './components/search' 
import { TextField } from '@mui/material'
import { searchData } from './components/data';

function App() { 

  const [search, setSearch] = useState({ doc_id: '', invoice_id: '', cust_number: '', buisness_year: '' });
    const { doc_id, invoice_id, cust_number, buisness_year } = search;
const changeHandler = e => {
        setSearch({ ...search, [e.target.name]: [e.target.value] });
    };
    const submitHandler = async (e) => {
        if (!(e.key === 'Enter')) {
            return
        }
        e.preventDefault()
        let response = await searchData(search)
    };

  return (
    <div className="body">
      <header>
        <div className="logo-flex">
          <div className="logo-item">
            <img src={mainlogo}/>
          </div>
          <div className="logo-item" id="hrc">
            <img src={mainlogo1}/>
          </div>
        </div> 
      </header>

          <div className="container" id = "container1" align="">
                <div id="button" className="btn-group"  >
                <Popup id='popup-anlt'
                            trigger={<button type="button" className="btn1" id='advanced'>Advanced Search</button>}
                            closeOnDocumentClick={true}
                            modal>
                            <Search /> 
                        </Popup>
                    
                    <button type="button" className="btn1" id='analytic'>Analytic View</button>
                    <button type="button" className="btn1" id='predict'>Predict</button>
                </div>
                <div className="search-box" align="">
                   {/* <input className="search-txt" type="text" name="" id="search-inv" placeholder="Search Customer ID"/>   */}
                  <TextField
                            label='Search Customer Id'
                            className='textbox search'
                            variant='standard'
                            size='small'
                            name='cust_number'
                            value={cust_number}
                            onChange={changeHandler}
                            onKeyPress={submitHandler}
                            sx={{ m: 2 }}
                        />
                 </div>
                <div id="button" className="btn-group" role="group"  align="">
                  <Popup id='popup-anlt'
                            trigger={<button type="button" className="btn2" id='add'>Add</button>}
                            closeOnDocumentClick={true}
                            modal>
                            <Add />
                        </Popup>
                  <Popup id='popup-anlt'
                            trigger={<button type="button" className="btn2" id='edit'>Edit</button>}
                            closeOnDocumentClick={true}
                            modal>
                             <Edit /> 
                        </Popup>
                  <Popup id='popup-anlt'
                            trigger={<button type="button" className="btn2" id='delete'>Delete</button>}
                            closeOnDocumentClick={true}
                            modal>
                            <Delete /> */
                        </Popup>     
                </div>         
      </div>  
      <div className='table'>
        <MyGrid />
      </div> 
      <footer>
        <p>
          <a href='https://www.freeprivacypolicy.com/live/eba74adf-b895-414b-9864-e6c3cc33e34e'>Privacy Policy</a> |©2022 HighRadius Corporation. All rights
        reserved.
        </p>
      </footer>
    </div>
  );
}
var addBtn = document.querySelector('#add');
var addModalBg = document.querySelector('.add-modal-bg'); 
var cancelBtn = document.querySelector('.modal-cancel-btn');

 

// if(addBtn){
//   addBtn.addEventListener('click', function(){
//     addModalBg.classList.add('add-modal-active');
//   })
// }     


if(cancelBtn){
  cancelBtn.addEventListener('click', function(){
    addModalBg.classList.remove('add-modal-active')
  })
} 



export default App
