import React from 'react'
import spaceMessageLogo from '../assets/spaceMessageLogo.jpeg'
import '../css/CamposLogin.modules.css';

const Logo = () => {
  return (
    <div className='centraliza'>
        <img src={spaceMessageLogo} className='tamanhoImg'/>
    </div>
  )
}

export default Logo