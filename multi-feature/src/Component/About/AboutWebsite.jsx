import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AboutWebsite() {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [data, setDate] = useState(null);

    const feachData = async (url) => {
        try {
            const responce = await axios.get(`https://api.api-ninjas.com/v1/whois?domain=${url}`,
                {
                    headers: {
                        "X-Api-Key": "mFoJ26zBZ5TIRxhiJCzmMA==JJMyAVy3EXSdZvLh",
                    }
                }
            )
            setDate(responce.data);
            console.log("data", responce.data)
        } catch (error) {
            console.log('erroe in getting data'.error);
            setDate(null);
        }

    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const urlPattern = /^([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

        if (urlPattern.test(url)) {
            feachData(url);
        } else {
            console.log("Invalid URL");
            return;
        }
    };

    return (<>
        <h1>About Website</h1>

        <form onSubmit={handelSubmit} className='m-3 p-2 card'>
            <label htmlFor="url ">Enter website URL:</label>
            <div className="row m-2">
                <div className="col-xl-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter URl"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary mt-3">Search</button>
                </div>
            </div>
        </form>

        <div className="constaner">
            {data && <div className="row">
                <div className=" card col-md-8 m-4 p-2">
                    <h4>Domain Name:{data.domain_name}</h4>
                    <h6>Registrar :{data.registrar}</h6>
                    <h6>Who is server :{data.whois_server}</h6>
                    <h6>Update date :{data.updated_date}</h6>
                    <h6>Expiration date :{data.expiration_date}</h6>
                    <h6>servers :{data.name_servers.join(" , ")}</h6>
                    <h6>DNS :{data.dnssec}</h6>
              </div>
            </div>
            }
        </div>
        <div className="btn btn-primary m-3" onClick={() => navigate('/')}>
                Go Back
            </div>
    </>
    )
}

export default AboutWebsite