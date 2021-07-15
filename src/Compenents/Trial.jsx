import React from 'react';

const Trial = ()=>{
    return(
        <><div className="container-fluid mt-5">
        <div className="row d-flex justify-content-centers">
        <div className="col-md-12 col-sm-6 col-xm-2 col-lg-12">       
        <table class="table table-borderless ">
        <thead>
            <tr style={{textAlign:'center', fontSize:'24px',color:'#808080'}}>
            <th scope="col">
            <h1 className="text text-center" id="first-header">0.16 %</h1>
            <p className="text text-center" style={{color:'#808080',fontSize:'16px'}}>5 Mins</p>
            </th>
            <th scope="col">
            <h1 className="text text-center" id="first-header">0.52 %</h1>
                    <p className="text text-center" style={{color:'#808080',fontSize:'16px'}}>1 Hour</p>
            </th>
            <th scope="col">
            <h1 className="text text-center" id="second-header">₹ 25,43,030</h1>
                    <p className="text text-center" style={{color:'#808080',fontSize:'16px'}}>Average BTC/INR net price including commission</p>
                </th>
            <th scope="col">
            <h1 className="text text-center" id="first-header">4.65 % </h1>
                    <p className="text text-center" style={{color:'#808080',fontSize:'16px'}}>1 Day</p>
            </th>
            <th scope="col">
            <h1 className="text text-center" id="first-header">7.1 % </h1>
                    <p className="text text-center" style={{color:'#808080',fontSize:'16px'  }}>7 Days</p>
            </th>
            </tr>
        </thead>
        </table>
        </div>
        </div>
        </div>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xm-12">
                <img src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png" className="img-fluid" alt="404"/>
                </div>
                </div>
            </div> 
        </>
    )
}

export default Trial;