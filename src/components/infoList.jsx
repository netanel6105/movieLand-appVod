import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const InfoList = () => {

    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const param = useParams()

    const doApiInfo = async () => {
        setLoading(true)
        let url = `http://www.omdbapi.com/?i=${param.id}&apikey=c253e9ac`
        const { data } = await axios.get(url)
        console.log(data);
        setInfo(data);
        setLoading(false);
    }


    



    useEffect(() => {
        doApiInfo()
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div className='container-fluid'>
                    <div className="container  mt-5">

                        <div className="row mx-auto mt-2 justify-center">

                            <div className='col-md-4 pt-4 mb-3 '>
                                <img src={info.Poster} alt="" className='width="350"' />
                            </div>

                            <div className=' col-md-7 pt-4 mb-4 mt-2 text-md-start text-center text-white'>

                                <h2 className='font-bold mt-2'>{info.Title}</h2>
                                <p className='mt-2'>{info.Plot}</p>
                                <h6 className='mt-2'>Gener : {info.Genre}</h6>
                                <p className='mt-2'>Actors : {info.Actors}</p >

                            

                                <div className='d-flex mt-3 justify-center'>

                                   

                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/star.png" alt="" />
                                    </div>
                                    <div className='text-white '>
                                            <img width="22" src="../image/half_star.png" alt="" />
                                    </div>
                                </div>


                                <div className='mt-3'>
                                <button className='btn  btn-light  '  >Back</button>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            }
            <p className='text-white m-0 p-3 bg-dar text-center'>@Netanel Haimchayev</p>
        </div>
    )
}

export default InfoList





                    // < p > { info.Actors }</p >
                    // <p>{info.Country}</p>
                    // <p>{info.DVD}</p>
                    // <p>{info.Director}</p>
                    // <p>{info.Genre}</p>
                    // <p>{info.Language}</p>
                    // <p>{info.Plot}</p>
                    // <p>{info.Title}</p>
                    // <p>{info.Writer}</p>
                    // <img src={info.Poster} alt="" />