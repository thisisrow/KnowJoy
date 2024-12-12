import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const card = [
        {
            id: 1,
            title: "Chuck Norris Joke",
            to: 'ChuckNorrisJoke',
        },
        {
            id: 2,
            title: "Dad Jokes",
            to: 'DadJokes',
        }
    ];
    const about = [
        {
            id: 1,
            title: "About Website",
            to: 'AboutWebsite',
        },
        {
            id: 2,
            title: "About Animal",
            to: 'AboutAnimal',
        },
        {
            id: 3,
            title: "About Celebrity",
            to: 'AboutCelebrity',
        }
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Welcome</h1>
            <h3>Entertainment</h3>
            <div className="row justify-content-start">
                {card.map((item) => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <div className='card'>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <button className="btn btn-primary" onClick={() => navigate(item.to || '/')}>
                                    Go to {item.title}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3>About </h3>
            <div className="row justify-content-start">
                {about.map((item) => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <div className='card'>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <button className="btn btn-primary" onClick={() => navigate(item.to || '/')}>
                                    Go to {item.title}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;