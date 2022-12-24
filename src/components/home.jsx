import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";

const Home = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    const param = useParams()

    const doApi = async() =>{
        try{
            
            setLoading(true)
            let url = `http://www.omdbapi.com/?s=${param.Search || "bank"}&apikey=c253e9ac`
            const {data} = await axios.get(url);
            console.log(data.Search);
            setData(data.Search);
            setLoading(false);
        }
        catch(error){
            console.log(error.response);
        }
        
    }




    useEffect(()=>{
        doApi();
    },[param])








    return (
        
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
               
                </div>
            </div>
            
        </div>
    )
}

export default Home