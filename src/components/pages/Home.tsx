import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

export default function Home(): React.ReactElement {
  return (
    <div style={{minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
      <div>
        <p style={{fontSize: "2em"}}>
          Hello, my name is <br/>
          <Link to="/about">
            <text className='name'>Seok-Hee Han</text> 
          </Link>
        </p>
        <p>
          Click on the name to see more
        </p>
      </div>
    </div>
  )
}
