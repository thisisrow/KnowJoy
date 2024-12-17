import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './Title.css';

const CardComponent = ({ title, to, navigate }) => (
    <div className="col-md-4 mb-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <button className="btn btn-primary mt-2" onClick={() => navigate(to)}>
                    Go to {title}
                </button>
            </div>
        </div>
    </div>
);

const Home = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Entertainment",
            items: [
                { id: 1, title: "Chuck Norris Joke", to: "ChuckNorrisJoke" },
                { id: 2, title: "Dad Jokes", to: "DadJokes" },
                { id: 3, title: "Riddles", to: "Riddles" }
            ]
        },
        {
            title: "Know About",
            items: [
                { id: 1, title: "About Website", to: "AboutWebsite" },
                { id: 2, title: "About Animal", to: "AboutAnimal" },
                { id: 3, title: "About Celebrity", to: "AboutCelebrity" }
            ]
        },
        {
            title: "Health/Wellness",
            items: [
                { id: 1, title: "Make Cocktail", to: "Cocktail" },
                { id: 2, title: "Exercises", to: "Exercises" },
                { id: 3, title: "Recipe", to: "Recipe" }
            ]
        }
    ];

    return (
        <div className="container mt-1">
            <div className="content mb-4">
                <h1 className="css-1dn3h68">Wellcome 
                      <span color="#524FFC" className="wrapper css-konzt6">
                        <span className="RollingText_word__ieJY1 word">user!</span>
                        <span className="RollingText_word__ieJY1 word">world!</span>
                        <span className="RollingText_word__ieJY1 word">bob!</span>
                        <span className="RollingText_word__ieJY1 word">everyone!</span>
                    </span>
                </h1>
                <h5>This website is designed to provide entertainment, knowledge, and health/wellness information.</h5>
            </div>

            <div className="homeCard">
                {sections.map((section, index) => (
                    <div key={index}>
                        <h3>{section.title}</h3>
                        <div className="row justify-content-start">
                            {section.items.map((item) => (
                                <CardComponent
                                    key={item.id}
                                    title={item.title}
                                    to={item.to}
                                    navigate={navigate}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
