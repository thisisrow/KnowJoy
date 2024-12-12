import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DadJokes = () => {
    const navigate = useNavigate(); 
    const [dadJoke, setDadJoke] = useState(""); 

    useEffect(() => {
        
        const fetchData = async () => {
            
            try {
                const response = await axios.get("https://api.api-ninjas.com/v1/dadjokes", {
                    headers: {
                        "X-Api-Key": "mFoJ26zBZ5TIRxhiJCzmMA==JJMyAVy3EXSdZvLh",
                    },
                });

                if (response.data.length > 0) {
                    setDadJoke(response.data[0].joke); 
                } else {
                    setDadJoke("No joke found!");
                }
            } catch (error) {
                console.error("Failed to fetch dad jokes:", error);
                setDadJoke("Failed to load a joke. Please try again.");
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Dad Joke</h5>
                    <p className="card-text">{dadJoke}</p>
                </div>
            </div>
            <div className="btn btn-primary m-3" onClick={() => navigate(-1)}>
                Go Back
            </div>
        </div>
        
    );
};

export default DadJokes;
