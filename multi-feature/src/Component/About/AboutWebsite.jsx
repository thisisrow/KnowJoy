import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AboutWebsite() {
    const [url, setUrl] = useState('');
    const [data, setDate] = useState(null);

    const feachData = async (url) => {
        try {
            const responce = await axios.get(`https://api.api-ninjas.com/v1/whois?domain=${url}`)
            setDate(responce.data);
            console.log("recived data",url)
            console.log("data",responce.data)
        } catch (error) {
            console.log('erroe in getting data'.error);
            setDate(null);
        }

    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if(url){
            const value=url.find('.');
            if(value){
                feachData(value);
            } else {
                alert("Invalid URL")
            }
        }
        console.log("Submit clicked",url)
        // feachData(url);
    };

    return (<>
        <h1>About Website</h1>

        <form onSubmit={handelSubmit}>
            <hr/>
                <label htmlFor="url">Enter website URL:</label>
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
            <hr/>
        </form>
        </>
    )
}

export default AboutWebsite