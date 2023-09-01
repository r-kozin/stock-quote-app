import React from 'react'

export const Spinner = ({ text = '', size = '5em' }) => {
  const header = text ? <h4>{text}</h4> : null
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
      <p>Please allow extra loading time on first request, server spins down to reduce costs.</p>
    </div>
  )
}
