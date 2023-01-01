import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import VodList from '../components/vodList';
import { useRef } from "react";


const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [years, setYears] = useState();
    const selectRef = useRef();

    const params = useParams()


    const doApi = async () => {
        try {

            setLoading(true)
            let url = `http://www.omdbapi.com/?s=${params.search || "bank"}&y=${years}&apikey=c253e9ac`
            const { data } = await axios.get(url);
            console.log(data.Search);
            setData(data.Search);
            console.log(params.search);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }

    }



    // strip year
    let yearArr = [];
    const displayYear = () => {
        let year = new Date().getFullYear() - 3;

        for (let i = 0; i < 7; i++) {
            yearArr[i] = year - i * 10;
        }
    }
    displayYear()


    //selectBox
    let yearSelect = [];
    const yearSelect1 = () => {
        let year = new Date().getFullYear();

        for (let i = 0; i < 30; i++) {
            yearSelect[i] = year - i;
        }

    }
    yearSelect1()




    useEffect(() => {
        doApi();
    }, [params, years])








    return (

        <div>

            <div className='topHome container-fluid '>
                <div className="container-md ">


                    
                    <nav class="navbar navbar-expand-lg navbar-light ">
                                <Link class="navbar-brand" href="#">Navbar</Link>
                               
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                {yearArr.map((item =>{
                                    
                                    <button onClick={() => {
                                        setYears(item)
                                    }} class="buttYearSt navbar-toggler mt-2" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon">{item}</span>
                                    </button>
                                }))}
                                
                            </div>
                        </div>
                    </nav>









                    <div className='p-2 col-8 col-lg-3 col-md-5'>

                        <select ref={selectRef} className="form form-select  text-center fs-4"
                            onChange={() => {
                                setYears(selectRef.current.value)
                            }} >

                            <option>Select Year...</option>
                            {yearSelect.map((item => {
                                return (

                                    <option value={item}>{item}</option>
                                )
                            }))}
                        </select>
                    </div>







                </div>
            </div>




            {loading ? <h1>Loading...</h1> :

                <div className="container-sm mx-auto">
                    <div className="flex flex-wrap">
                        {data.map((item, i) => {
                            return (
                                <VodList key={i} item={item} />


                            )

                        })}

                    </div>
                </div>
            }
        </div>
    )
}

export default Home











{/* <div className='flex flex-wrap  justify-between justify-items-center  '>
                        <h2 className='topYear mb-2 mt-2 text-[25px] '>Top Yaer :</h2>
                        {yearArr.map((item => {
                            return (

                                <button onClick={() => {
                                    setYears(item)
                                }} class="buttYearSt navbar-toggler mt-2" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon">{item}</span>
                                </button>
                            )
                        }))}
                    </div> */}
