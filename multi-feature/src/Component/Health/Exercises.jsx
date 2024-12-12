import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercises = () => {
    const navigate = useNavigate();
    const key = import.meta.env.VITE_KEY;

    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [muscle, setMuscle] = useState("");
    const [error, setError] = useState(null); // Error state

    const handleMuscleChange = (e) => {
        setMuscle(e.target.value);
        setExercises([]); // Clear previous results
        setError(null); // Clear previous errors
    };

    useEffect(() => {
        const fetchExercises = async () => {
            if (!muscle) return;

            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
                    {
                        headers: { "X-Api-Key": key },
                    }
                );
                if (response.data.length > 0) {
                    setExercises(response.data);
                } else {
                    setExercises([]);
                }
            } catch (error) {
                console.error("Error fetching exercises:", error);
                setError("Failed to fetch exercises. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, [muscle]);


    return (
        <div className="container mt-5">
            <h2>Select a Muscle Group:</h2>
            <select
                value={muscle}
                onChange={handleMuscleChange}
                className="form-select mb-4"
            >
                <option value="" disabled>
                    Choose a muscle group
                </option>
                <option value="abdominals">Abdominals</option>
                <option value="abductors">Abductors</option>
                <option value="adductors">Adductors</option>
                <option value="biceps">Biceps</option>
                <option value="calves">Calves</option>
                <option value="chest">Chest</option>
                <option value="forearms">Forearms</option>
                <option value="glutes">Glutes</option>
                <option value="hamstrings">Hamstrings</option>
                <option value="lats">Lats</option>
                <option value="lower_back">Lower Back</option>
                <option value="middle_back">Middle Back</option>
                <option value="neck">Neck</option>
                <option value="quadriceps">Quadriceps</option>
                <option value="traps">Traps</option>
                <option value="triceps">Triceps</option>
            </select>

            <hr />

            <h1 className="d-flex justify-content-between">
                {muscle
                    ? `Exercises for ${muscle.charAt(0).toUpperCase() + muscle.slice(1)}`
                    : "Select a Muscle Group"}

                <div className="btn btn-primary m-3 " onClick={() => navigate('/')}>
                    Go Back Home
                </div>
            </h1>

            {loading && (
                <div className="alert alert-info mt-3">
                    <p>Loading exercises...</p>
                </div>
            )}

            {error && (
                <div className="alert alert-danger mt-3">
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && exercises.length > 0 && (
                <div className="row">
                    {exercises.map((exercise, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div
                                className="card h-100"
                                style={{ cursor: "pointer" }}
                                title={exercise.instructions} // Full instructions on hover
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{exercise.name}</h5>
                                    <p className="card-text">
                                        <strong>Type:</strong> {exercise.type}
                                    </p>
                                    <p className="card-text">
                                        <strong>Difficulty:</strong> {exercise.difficulty}
                                    </p>
                                    <p className="card-text ">
                                        <strong>Instructions:</strong> {exercise.instructions}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && !error && exercises.length === 0 && muscle && (
                <div className="alert alert-warning mt-3">
                    <p>No exercises found for the selected muscle group.</p>
                </div>
            )}
        </div>
    );
};

export default Exercises;
