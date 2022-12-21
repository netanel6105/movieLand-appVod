import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-light bg-light justify-content-between">
                <Link  class="navbar-brand" to={"#"}>VodApp</Link>

                <form class="form-inline d-flex">
                    <input class=" form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>


            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}

export default Header


