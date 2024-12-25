import React from 'react'
import "./component.css"
const Tags = ({name}) => {
  return (
    <button className='tag'>
       {name}
    </button>
  )
}

export default Tags
