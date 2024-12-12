import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AboutAnimal() {
    const navigate = useNavigate();
    const [animal, setAnimal] = useState(null);
    const [name, setName] = useState('');
    const key = import.meta.env.VITE_KEY;
 
    const fetchAnimal = async (animalName) => {
        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
                headers: {
                    "X-Api-Key":key,
                }
            });
            if (response.data.length > 0) {
                setAnimal(response.data[0]);
            } else {
                setAnimal(null);
            }
        } catch (error) {
            console.error("Error fetching animal data:", error);
            setAnimal(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "") {
            alert("Please enter an animal name.");
            return;
        }
        fetchAnimal(name);
    };

    return (
        <div className="container mt-4">
            <h1>About Animal</h1>
            <div className="card p-3">
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="row m-2">
                        <div className="col-xl-6">
                            <h5>Enter Animal name</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter animal name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary mt-3">Search</button>
                        </div>
                    </div>
                </form>
            </div>


            {animal ?  (
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{animal.name}</h5>
                        <p><strong>Scientific Name:</strong> {animal.taxonomy.scientific_name}</p>
                        <p><strong>Kingdom:</strong> {animal.taxonomy.kingdom}</p>
                        <p><strong>Phylum:</strong> {animal.taxonomy.phylum}</p>
                        <p><strong>Class:</strong> {animal.taxonomy.class}</p>
                        <p><strong>Order:</strong> {animal.taxonomy.order}</p>
                        <p><strong>Family:</strong> {animal.taxonomy.family}</p>
                        <p><strong>Genus:</strong> {animal.taxonomy.genus}</p>
                        <p><strong>Locations:</strong> {animal.locations.join(", ")}</p>
                        <h6>Characteristics:</h6>
                        <ul>
                            <li><strong>Diet:</strong> {animal.characteristics.diet}</li>
                            <li><strong>Lifespan:</strong> {animal.characteristics.lifespan}</li>
                            <li><strong>Top Speed:</strong> {animal.characteristics.top_speed}</li>
                            <li><strong>Habitat:</strong> {animal.characteristics.habitat}</li>
                            <li><strong>Prey:</strong> {animal.characteristics.prey}</li>
                            <li><strong>Biggest Threat:</strong> {animal.characteristics.biggest_threat}</li>
                        </ul>
                    </div>
                </div>
            ) : (
                name && <p className="text-danger">Click Serch</p>
            )}
            <div className="btn btn-primary m-3" onClick={() => navigate('/')}>
                Go Back
            </div>
        </div>
    );
}

export default AboutAnimal;
