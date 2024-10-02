import React from 'react'

const MenuItem  = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="px-4 py-3 font-semibold transition hover:bg-neutral-100"
    >
      {props.label}
    </div>
  )
}

export default MenuItem 
