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
                <div>
                    <p>{info.Actors}</p>
                    <p>{info.Country}</p>
                    <p>{info.DVD}</p>
                    <p>{info.Director}</p>
                    <p>{info.Genre}</p>
                    <p>{info.Language}</p>
                    <p>{info.Plot}</p>
                    <p>{info.Title}</p>
                    <p>{info.Writer}</p>
                </div>
            }
        </div>
    )
}

export default InfoList