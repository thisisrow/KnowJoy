import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ChuckNorrisJoke = () => {
    const [data, setData] = useState(null); // Initialize as null to avoid rendering issues.

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/chucknorris`, {
                    headers: {
                        'X-Api-Key': 'mFoJ26zBZ5TIRxhiJCzmMA==JJMyAVy3EXSdZvLh'
                    }
                });
                setData(response.data);
                console.log(response.data); // Log the data to confirm the structure.
            } catch (error) {
                alert("Failed to fetch data: " + error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Chuck Norris Joke</h5>
                    {data ? ( // Check if data is loaded
                        <p className="card-text">{data.joke}</p>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChuckNorrisJoke;
