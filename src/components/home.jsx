import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from "react-router-dom";
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



    // // strip year
    // let yearArr = [];
    // const displayYear = () => {
    //     let year = new Date().getFullYear() - 3;

    //     for (let i = 0; i < 7; i++) {
    //         yearArr[i] = year - i * 10;
    //     }
    // }
    // displayYear()




    
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


                    {/* <nav className='navbar navbar-expand-lg navbar-dark'>
                        <div className="container">
                            <span className='navbar-brand'>
                                <Link className='topYear mb-2 mt-2 text-[25px]' to={'#'}>Top Yaer :</Link>
                            </span>

                            <button className='navbar-toggler collapsed bg-dark' aria-controls="basic-navbar-nav" type="button" 
                            aria-label="Toggle navigation">
                                    <span className='navbar-toggler-icon'></span>
                           </button>


                           <div className='navbar-collapse collapse show' id="basic-navbar-nav">
                                    <div className='me-auto navbar-nav'>
                                        {yearArr.map((item =>{
                                            return(
                                             <button onClick={()=>{
                                                setYears(item)
                                            }}>
                                               {item}
                                                
                                             </button>
                                            )
                                        }))}
                                    </div>
                           </div>
                        </div>


                    </nav> */}









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





            {data ? ( <div> 
                
                {loading ? <h1 className='foundCss text-danger font-black text-center mt-2'>Loading...</h1> :

                <div className="container-sm mx-auto">
                    <div className="flex flex-wrap">
                        {data.map((item, i) => {
                            return (
                                <VodList key={i} item={item} />
                                )
                            })}
                    </div>
                </div>} 
                
                
                </div> ) : (<h1 className='foundCss text-danger font-black text-center mt-2'>Movie not Found </h1>)}
        </div>
    )
}


export default Home











