import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import VodList from '../components/vodList';

const Home = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    const param = useParams()
    console.log(param.search);
    const doApi = async () => {
        try {

            setLoading(true)
            let url = `http://www.omdbapi.com/?s=${param.search || "bank"}&apikey=c253e9ac`
            const { data } = await axios.get(url);
            console.log(data.Search);
            setData(data.Search);
            setLoading(false);
        }
        catch (error) {
            console.log(error.response);
        }

    }




    useEffect(() => {
        doApi();
    }, [param])








    return (

        <div>
            {loading ? <h1>Loading...</h1> :

                <div className="container-sm mx-auto">
                    <div className="flex flex-wrap">
                        {data.map((item, i) => {
                            return <VodList key={i} item={item} />;
                        })}

                    </div>
                </div>
            }
        </div>
    )
}

export default Home