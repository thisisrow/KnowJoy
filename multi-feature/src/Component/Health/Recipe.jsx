import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Recipe() {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false); 
    const key = import.meta.env.VITE_KEY;

    const fetchRecipe = async (RecipeName) => {
        setLoading(true); 
        setData([]); 

        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?name=${RecipeName}`, {
                headers: {
                    'X-Api-Key': key
                }
            });
            if (response.data.length > 0) {
                setData(response.data); 
            } else {
                setData([]); 
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setData([]); 
        } finally {
            setLoading(false); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            alert("Please enter a Recipe name.");
            return;
        }
        fetchRecipe(name);
    };

    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <h1>About Recipe</h1>
            <div className="card p-3">
                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="row m-2">
                        <div className="col-xl-6">
                            <h5>Enter Recipe Name</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Recipe name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary mt-3">Search</button>
                        </div>
                    </div>
                </form>
            </div>


            {loading && (
                <div className="alert alert-info mt-3">
                    <p>Loading...</p>
                </div>
            )}

            {!loading && data.length > 0 && (
                data.map((item, index) => (
                    <div className="card mt-3" key={index}>
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">{item.title}</h5>
                            <p><strong>Ingredients:</strong></p>
                            <ul>
                                {item.ingredients.split(' ; ')?.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                            <p>
                                <strong>Instruction:</strong> {item.instructions}
                            </p>
                            <p>
                                <strong>Servings:</strong> {item.servings}
                            </p>
                        </div>
                    </div>
                ))
            )}

            {!loading && data.length === 0 && name && (
                <div className="alert alert-warning mt-3">
                    <p>No data found.</p>
                </div>
            )}

            <div className="btn btn-primary m-3" onClick={() => navigate('/')}>
                Go Back
            </div>
        </div>
    );
}

export default Recipe;
