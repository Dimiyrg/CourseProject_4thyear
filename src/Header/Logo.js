import React from 'react';
import '../App.css';
//className="logo">
function Llogo(props) {
    return(
        <header className='logo'> 
        {props.sitename}
        </header>
    )
}
export default Llogo;