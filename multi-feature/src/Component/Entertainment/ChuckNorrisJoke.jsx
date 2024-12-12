import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ChuckNorrisJoke = () => {
    const navigate = useNavigate(); 
    const [data, setData] = useState(null); 
    const key = import.meta.env.VITE_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/chucknorris`, {
                    headers: {
                        'X-Api-Key': key
                    }
                });
                setData(response.data);
                console.log(response.data); 
            } catch (error) {
                alert("Failed to fetch data: " + error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container ">
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">Chuck Norris Joke</h5>
                    {data ? ( 
                        <p className="card-text">{data.joke}</p>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <div className="btn btn-primary m-3" onClick={() => navigate('/')}>
                Go Back
            </div>
        </div>
    );
};

export default ChuckNorrisJoke;
