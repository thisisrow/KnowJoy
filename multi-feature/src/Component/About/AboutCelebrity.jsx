import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AboutCelebrity() {
    const navigate = useNavigate();
    const [celebrity, setCelebrity] = useState(null);
    const [name, setName] = useState('');
    const key = import.meta.env.VITE_KEY;

    const fetchcelebrity = async (celebrity) => {
        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/celebrity?name=${name}`, {
                headers: {
                    "X-Api-Key": key,
                }
            });
            if (response.data.length > 0) {
                setCelebrity(response.data[0]);
            } else {
                setCelebrity(null);
            }
        } catch (error) {
            console.error("Error fetching Celebrity data:", error);
            setCelebrity(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Please enter an Celebrity name.");
            return;
        }
        fetchcelebrity(name);
    };

    return (
        <div className="container mt-4">
            <h1>About Celebrity</h1>
            <div className="card p-3">
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="row m-2">
                        <div className="col-xl-6">
                            <h5>Enter Animal name</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Celebrity name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary mt-3">Search</button>
                        </div>
                    </div>
                </form>
            </div>


            {
            celebrity &&
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{celebrity.name}</h5>
                        <p><strong>Net Worth:</strong> {celebrity.net_worth}</p>
                        <p><strong>Gender:</strong> {celebrity.gender}</p>
                        <p><strong>Nationality:</strong> {celebrity.nationality}</p>
                        <p><strong>Occupation:</strong> {celebrity.occupation.join(" , ")}</p>
                        <p><strong>Height:</strong> {celebrity.height}</p>
                        <p><strong>Birth Day:</strong> {celebrity.birthday}</p>
                    </div>
                </div>
            }
            <div className="btn btn-primary m-3" onClick={() => navigate('/')}>
                Go Back
            </div>
        </div>
    )
}

export default AboutCelebrity