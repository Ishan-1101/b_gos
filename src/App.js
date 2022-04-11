import logo from './logo.svg';
import './App.css';
import  MyGrid  from './component/MyGrid';
import mainlogo from './Group 20399.svg'
import mainlogo1 from './logo.svg'
import Popup from 'reactjs-popup'
import Add from './component/Add'

function App() { 
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
                    <button type="button" className="btn1" id='advanced'>Advanced Search</button>
                    <button type="button" className="btn1" id='analytic'>Analytic View</button>
                    <button type="button" className="btn1" id='predict'>Predict</button>
                </div>
                <div className="search-box" align="">
                  <input className="search-txt" type="text" name="" id="search-inv" placeholder="Search Customer ID"/>
                    <a className="search-btn" href="#"></a>
                 </div>
                <div id="button" className="btn-group" role="group"  align="">
                  <Popup id='popup-anlt'
                            trigger={<button type="button" className="btn2" id='add'>Add</button>}
                            modal>
                            <Add />
                        </Popup>
                    <button type="button" className="btn2" id='edit'>Edit</button>
                    <button type="button" className="btn2" id='delete'>Delete</button>
                </div>         
      </div>  
      <div className='table'>
        <MyGrid />
      </div> 
      <footer>
        <p>
          <a href=''>Privacy Policy</a> |©2022 HighRadius Corporation. All rights reserved.
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



export default App;