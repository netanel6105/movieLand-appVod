import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import VodList from '../components/vodList';

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const params = useParams()


    
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
        const displayYear =()=>{
            let year = new Date().getFullYear();

            for(let i =0; i< 10; i++){
                yearArr[i] = year -i*10;
            }
        }


        let yearSelect = [];
        const yearSelect1 = () =>{
            let year = new Date().getFullYear();

            for(let i =0; i <30 ; i++){
                yearSelect[i] = year-1;
            }
        }



    useEffect(() => {
        doApi();
    }, [params])








    return (

        <div>
            {loading ? <h1>Loading...</h1> :

                <div className="container-sm mx-auto">
                    <div className="flex flex-wrap">
                        {data.map((item, i) => {
                            return <VodList key={i} item={item} />
                        })}

                    </div>
                </div> 
            }
        </div>
    )
}

export default Home