import React from 'react';

const Footer = ()=>{
    const footerStyle={color:'#808080',fontSize:'12px',paddingLeft:'12px',fontFamily:'Oswald, sans-serif'};
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xm-12">
                <img src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png" className="img-fluid" alt="404"/>
                </div>
                </div>
            </div>
            <hr style={{backgroundColor :'#5DC7C2'}}/> 
            <div className="footer">
                <div className="footer-text" style={footerStyle}  >Copyright © 2019  <span style={footerStyle}>HodlInfo.com</span>  <span style={footerStyle}>Developed By</span> <span style={{color:'#3DC6C1'}}>QuadBTech</span> <span style={{float:'right',marginRight:'10px'}}>Support</span></div>
                
                
            </div>  
        </>
    )
}

export default Footer;