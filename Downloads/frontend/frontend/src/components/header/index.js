import React from 'react'
import img1 from '../images/abc_products.png';
import img2 from '../images/hrc_logo.png';
import './style.css'

export const Header = (props) => {
  return(
    <div style={{margin:"0.5rem"}}>
        <img className="image1" src={img1} />
        <img className="image2" style={{marginLeft:"20rem"}} src={img2}/>
    </div>
   )
 }