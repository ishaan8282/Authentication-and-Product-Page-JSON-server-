import React from 'react'
import { Link } from 'react-router-dom';


const links = [ {path:"/", title:"Home"},
{path:"/about", title:"About"},
{path:"/contact", title:"Contact"},
{path:"/product", title:"Products"},
{path:"/login", title:"LogIn"},
]

function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
    {
        links.map ((link) =>(
       <Link key={link.path} to={link.path}>
     <h1>{link.title}</h1>
       </Link>
         ))
    }

    </div>
  )
}

export default Navbar