import React from 'react'
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./Colors/Colors";
import "./SideBar.css";
const SideBar = ({handleChange}) => {
  
  return (
    <div className='high'>
         <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category  handleChange={handleChange}/>
        <Price handleChange={handleChange} />
        <Colors  handleChange={handleChange}/>
      </section>
    </div>
  )
}

export default SideBar