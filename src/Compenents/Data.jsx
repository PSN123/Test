import React from 'react';
import Wazir from '../Images/wazirx.png'
import Bitbns from '../Images/bitbns.png'
import Giotus from '../Images/Giotus.png'
import Colodax from '../Images/Colodax.png'
import Zebpay from '../Images/Zebpay.png'
import CoinDCX from '../Images/CoinDCX.png'

const Data = ()=>{
    const tabstyle={textAlign:'center', textDecoration:'none',color:'white',fontSize:'24px',fontFamily: 'Oswald'}
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-centers">
            <div className="col-md-12 col-sm-8 col-xm-4">       
            <table class="table table-borderless ">
            <thead>
                <tr style={{textAlign:'center', fontSize:'24px',color:'#808080'}}>
                <th scope="col">#</th>
                <th scope="col">Platform</th>
                <th scope="col">Last Traded Price</th>
                <th scope="col">Buy / Sell Price</th>
                <th scope="col">Difference</th>
                <th scope="col">Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr style={{backgroundColor:'#343a40'}}>
                <th scope="row" style={tabstyle}>1</th>
                <td className="text text-center"><a href="#" style={tabstyle}><img className="img-rounded" src={Wazir} style={{width:'20px',borderRadius:'40px'}}/><span style={tabstyle}> Wazirx</span></a></td>
                <td style={tabstyle}>₹ 25,27,999</td>
                <td style={tabstyle}>₹ 25,22,506 / ₹ 25,27,999</td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}>-0.59 %</span></td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}> ▼ ₹ 15,031</span></td>
                </tr>
                <br/>
                <tr style={{backgroundColor:'#343a40'}}>
                <th scope="row" style={tabstyle}>2</th>
                <td className="text text-center"><a href="#" style={tabstyle}><img className="img-rounded" src={Bitbns} style={{width:'20px',borderRadius:'40px'}}/><span style={tabstyle}>  Bitbns</span></a></td>
                <td style={tabstyle}>₹ 25,40,546</td>
                <td style={tabstyle}>₹ 25,36,001 / ₹ 25,40,546</td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}> -0.10 %</span></td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}> ▼ ₹ 2,484</span></td>
                </tr>
                <br/>
                <tr style={{backgroundColor:'#343a40'}}>
                <th scope="row" style={tabstyle}>3</th>
                <td className="text text-center"><a href="#" style={tabstyle}><img className="img-rounded" src={Giotus} style={{width:'20px',borderRadius:'40px'}}/><span style={tabstyle}> Giotus</span></a></td>
                <td style={tabstyle}>₹ 25,45,999</td> 
                <td style={tabstyle}>₹ 25,16,300 / ₹ 25,46,800</td>
                <td style={tabstyle}><span style={{color:'#5DC7C2'}}>0.12 %</span></td>
                <td style={tabstyle}><span style={{color:'#5DC7C2'}}>▲ ₹ 2,968</span></td>
                </tr>
                <br/>
                <tr style={{backgroundColor:'#343a40'}}>
                <th scope="row" style={tabstyle}>4</th>
                <td className="text text-center"><a href="#" style={tabstyle}><img className="img-rounded" src={Colodax} style={{width:'20px',borderRadius:'40px'}}/><span style={tabstyle}> Wazirx</span></a></td>
                <td style={tabstyle}>₹ 25,27,999</td>
                <td style={tabstyle}>₹ 25,22,506 / ₹ 25,27,999</td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}> -0.59 %</span></td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}>▼ ₹ 15,031</span></td>
                </tr>
                <br/>
                <tr style={{backgroundColor:'#343a40'}}>
                <th scope="row" style={tabstyle}>5</th>
                <td className="text text-center"><a href="#" style={tabstyle}><img className="img-rounded" src={Zebpay} style={{width:'20px',borderRadius:'40px'}}/><span style={tabstyle}> Zebpay</span></a></td>
                <td style={tabstyle}>₹ 25,83,138</td>
                <td style={tabstyle}>₹ 25,75,167 / ₹ 26,08,984</td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}>-0.59 %</span></td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}>▼ ₹ 15,031</span></td>
                </tr>
                <br/>
                <tr style={{backgroundColor:'#343a40'}}>
                <th scope="row" style={tabstyle}>6</th>
                <td className="text text-center"><a href="#" style={tabstyle}><img className="img-rounded" src={CoinDCX} style={{width:'20px',borderRadius:'40px'}}/><span style={tabstyle}> CoinDCX</span></a></td>
                <td style={tabstyle}>₹ 25,27,999</td>
                <td style={tabstyle}>₹ 25,22,506 / ₹ 25,27,999</td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}>-0.59 %</span></td>
                <td style={tabstyle}><span style={{color:'#DA5757'}}>▼ ₹ 15,031</span></td>
                </tr>
            </tbody>    
            </table>
            </div>
        </div>
     </div>   
        </>
    )
}

export default Data;