import React from 'react';
import './Landing.css';
import NavBar from '../../../Components/NavBar/NavBar';
import BrandContainer from '../BrandContainer/BrandContainer';
import BrandTitle from '../../../Components/BrandTitle/BrandTitle';

const Landing = () => {
  return (
    <div className='Landing'>
        <NavBar/>
            <BrandContainer>
                <BrandTitle/>
            </BrandContainer>
    </div>
  )
}

export default Landing