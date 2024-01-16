import React from 'react'

const Button = ({label, callback, color}) => {
  return (
    <button onClick={()=> callback()}>{label}</button>
  )
}

export default Button