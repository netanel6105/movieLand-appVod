import React,{ useRef } from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const inputRef = useRef();
    const nav =useNavigate()
    
    return (
        <div>
            <div className="navTop container-fluid bg-dark p-2">

                <div className='container-md  bg-dark'>
                    <div className="row">
                    <nav class="navbar navbar-light  justify-content-between">
                        <Link  class="navbar-brand" to={"#"}> <h3 className='bg-warning my-2 p-1 ' >MARICA.TV</h3> </Link>

                        <form class="form-inline d-flex">
                            <input  onKeyDown={(e) =>{  if(e.key === "Enter"){ nav("/" + inputRef.current.value)}}} ref={inputRef} class=" form-control  mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button onClick={()=> nav(inputRef.current.value)} class="btn btn-warning bg-warning  my-1 mx-0 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavBar 