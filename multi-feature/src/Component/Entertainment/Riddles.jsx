import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Riddles = () => {
    const navigate = useNavigate();
    const [riddles, setRiddles] = useState(null); // Initialize as `null` for clarity
    const apiKey = import.meta.env.VITE_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.api-ninjas.com/v1/riddles", {
                    headers: {
                        "X-Api-Key": apiKey,
                    },
                });

                if (response.data.length > 0) {
                    setRiddles(response.data[0]);
                } else {
                    setRiddles({ question: "No riddle found!", answer: "" });
                }
            } catch (error) {
                console.error("Failed to fetch Riddles:", error);
                setRiddles({ question: "Failed to load riddle.", answer: "" });
            }
        };

        fetchData();
    }, [apiKey]); // Depend on `apiKey` to ensure proper fetching

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    {riddles ? (
                        <>
                            <h5 className="card-title text-capitalize">{riddles.title || "Riddle"}</h5>
                            <p className="card-text">{riddles.question}</p>

                            <p>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#riddleAnswerCollapse"
                                    aria-expanded="false"
                                    aria-controls="riddleAnswerCollapse"
                                >
                                    Show/Hide Answer
                                </button>
                            </p>

                            <div className="collapse" id="riddleAnswerCollapse">
                                <div className="card card-body">
                                    {riddles.answer || "No answer available."}
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading riddle...</p>
                    )}
                </div>
            </div>

            <div className="btn btn-primary m-3" onClick={() => navigate("/")}>
                Go Back
            </div>
        </div>
    );
};

export default Riddles;
