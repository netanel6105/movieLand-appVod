import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <div className="container-fluid bg-dark">

                <div className='container '>
                    <nav class="navbar navbar-light bg-light justify-content-between">
                        <Link  class="navbar-brand " to={"#"}>MARICA.TV</Link>

                        <form class="form-inline d-flex">
                            <input class=" form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </div>


            </div>
        </div>
    )
}

export default NavBar 