import React from 'react';
import fb from '../images/fb.jpg';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import { useHistory } from "react-router-dom";



export default function Footer() {
    const history = useHistory();
    const fbclick = () =>{ 
        let path = '/www.facebook.com'; 
        history.push(path); }
    return (
    <>
    <footer>
        <div class="footer1">
        <div class="item1">© 2020–2021 LearnOnline.com, Inc. </div>
        <div class="item1">All rights resreved. </div>
        <div class="item2">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div class="item3"> Back to top</div>
        </div>
    
    </footer>
   
  </>
        
    );
}
