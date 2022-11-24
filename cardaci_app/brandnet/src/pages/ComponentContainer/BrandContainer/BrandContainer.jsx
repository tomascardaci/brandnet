import React from 'react'
import BrandTitle from '../../../Components/BrandTitle/BrandTitle'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './BrandContainer.css'



const BrandContainer = () => {
  return (
    <div className='BrandContainer'>
        <BrandTitle/>
        <ItemListContainer greeting={'Te damos la bienvenida!'}/>
        {/* <div id='circle'></div> */}
    </div>
  )
}

export default BrandContainer