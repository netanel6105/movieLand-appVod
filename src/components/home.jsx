import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import VodList from '../components/vodList';
import { useRef } from "react";


const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const [years, setYears] = useState('select-year...');
    const selectRef = useRef();



    const doApi = async () => {
        try {

            setLoading(true)
            let url = `http://www.omdbapi.com/?s=${params.search || "bank"}&apikey=c253e9ac`
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
        let year = new Date().getFullYear();

        for (let i = 0; i < 10; i++) {
            yearArr[i] = year - i * 10;
        }
    }
    displayYear()


    //selectBox
    let yearSelect = [];
    const yearSelect1 = () => {
        let year = new Date().getFullYear();

        for (let i = 0; i < 30; i++) {
            yearSelect[i] = year - 1;
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
                    <div className="row col-lg-2 col-md-4 col-4">
                        <h2 className='topYear mb-2 mt-2 text-[25px]'>Top Yaer :</h2>

                         <select ref={selectRef} onChange={() => {
                    setYears(selectRef.current.value);
                }}
                >
                    {yearSelect.map((item) => {
                        return(
                            // <option value='select-year...'>select-year...</option>,
                         <option className="bg-black ">{item}</option>
                         )
                        })}
                </select>

                {yearArr.map((item) => {
                    return (
                        <button
                            className="border-t-neutral-50 p-4"
                            onClick={() => {
                                setYears(item);
                            }}
                        >
                            {item}
                        </button>
                    );
                })}


                    </div>
                </div>

            </div>




{/*                  
            <div className="mb-4 flex flex-wrap p-4 container mx-auto">
               
                <h2 className="p-4 ml-[25px] text-[25px] underline">Top Year:</h2>

                <select ref={selectRef} onChange={() => {
                    setYears(selectRef.current.value);
                }}
                >
                    {yearSelect.map((item) => {
                        return <option className="bg-black ">{item}</option>;
                    })}
                </select>

                {yearArr.map((item) => {
                    return (
                        <button
                            className="border-t-neutral-50 p-4"
                            onClick={() => {
                                setYears(item);
                            }}
                        >
                            {item}
                        </button>
                    );
                })}
            </div> */}






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