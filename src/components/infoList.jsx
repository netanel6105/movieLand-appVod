import React, { useState } from 'react'
import axios from 'axios';
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
                <div>
                    <p>{data.Actors}</p>
                    <p>{data.Country}</p>
                    <p>{data.DVD}</p>
                    <p>{data.Director}</p>
                    <p>{data.Genre}</p>
                    <p>{data.Language}</p>
                    <p>{data.Plot}</p>
                    <p>{data.Title}</p>
                    <p>{data.Writer}</p>
                </div>
            }
        </div>
    )
}

export default InfoList