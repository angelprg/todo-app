import React from 'react'

const Todo = ({title, done}) => {
  const color = done ? 'green' : 'black'
  const adornment = done ? 'line-through' : 'none'

  return (
    <div style={{color, textDecoration: adornment}}>
      {title}
    </div>
  )
}

export default Todo

// {color: color} === {color}