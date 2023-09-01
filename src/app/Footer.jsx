import React from 'react'
import { useSelector } from 'react-redux'

export const Footer = () => {
    const theme = useSelector((state) => state.quote.darkMode);
  return (
    <div className={`copyright ${theme}`}>
        <p>© 2023 Ryan Kozin - Stock Quotes & Tracker</p>
        <p style={{fontSize: "xx-small"}}>Data provided by finnhub.io</p>
    </div>
  )
}
