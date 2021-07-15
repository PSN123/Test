import React from 'react';
import Logo from '../Images/logo.JPG';
import { FaPaperPlane } from 'react-icons/fa';


const Navbar = ()=>{
    return(
        <>
    <div class="container-fluid pt-4">
    <div class="align-items-center d-flex justify-content-sm-center row mt-auto">
    <div class="text-center-sm col-xm-4 col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
        <a href="#" style={{textDecoration:'none'}}>
      <img className="justify-content-xm-center mx-5" src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="404" width="300"/>
     <p className="mx-5" style={{color:'#808080'}}>Powered By <span style={{color:'rgb(61, 198, 193'}}>Finstreet</span></p>
    </a>
    </div>
  
    <div class="text-center padding-none col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center" style={{fontFamily:'Oswald, sans sarif',fontSize:'16px',borderRadius:'20px'}}>
   {/* INR Dropdown */}
   <div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:'20px'}}>
  INR</button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">INR</a></li>
  </ul>
</div>

<div class="btn-group">
<button class="btn btn-secondary btn-sm dropdown-toggle mx-4"  type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontFamily:'Oswald, sans sarif',fontSize:'16px',width:'80px',height:'60px',borderRadius:'20px'}}>
    BTC
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">BTC</a></li>
  <li><a class="dropdown-item" href="#">ETH</a></li>
  <li><a class="dropdown-item" href="#">USDT</a></li>
  <li><a class="dropdown-item" href="#">XRP</a></li>
  <li><a class="dropdown-item" href="#">TRX</a></li>
  <li><a class="dropdown-item" href="#">DASH</a></li>
  <li><a class="dropdown-item" href="#">ZEC</a></li>
  <li><a class="dropdown-item" href="#">XEM</a></li>
  <li><a class="dropdown-item" href="#">LOST</a></li>
  <li><a class="dropdown-item" href="#">WIN</a></li>
  <li><a class="dropdown-item" href="#">BTT</a></li>
  <li><a class="dropdown-item" href="#">WRX</a></li>
  </ul>
  <button class="btn btn-secondary btn-sm"  type="button" style={{fontFamily:'Oswald, sans sarif',fontSize:'16px',borderRadius:'20px'}}>BUY BTC</button>

    </div>
</div>
<br/><br/><br/>
    <div class="col-md-12 col-lg-4 col-sm-12 col-xm-12 d-inline-flex flex-wrap align-items-center justify-content-center">
     {/* <div className="btn-group"> */}
     <button className="btn btn-secondary btn-sm mx-2" style={{ width: '40px',height: '40px',color:'#3DC6C1',textAlign: 'center',border: '3px solid #3DC6C1',backgroundColor: 'transparent',borderRadius: '100px'}}  type="button">60</button>
     <button class="btn btn-secondary btn-lg mx-2" style={{backgroundColor:'#3DC6C1',borderRadius:'40px',fontFamily:'Oswald, sans sarif'}}  type="button"><FaPaperPlane/>  Connect Telegram</button>
     <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
   </div>
     </div>
    </div>
    <h3 className="text text-center mt-5" id="header">Best Price to Trade</h3>
  {/* </div> */}
  <nav class="navbar fixed-bottom navbar-light" style={{backgroundColor:'#191d28'}}>
  <div class="container-fluid d-flex justify-content-center">
    <a class="navbar-brand" href="#"><button className="btn btn-outline-primary">Add Holdinfo to home screen</button></a>
  </div>
</nav>
</div>
</>
    )

}

export default Navbar;