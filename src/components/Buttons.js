import React from 'react'

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <div>
       <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
    </div>
  )
}

export default Buttons