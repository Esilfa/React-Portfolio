import './projects.css';
import React from 'react';
import { Card}from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import { Container } from 'react-bootstrap';


export default function projects() {
    return (
        <div className='projects  bg-secundary card-text center' id="projects">
            <h1>Projects</h1>

            <div className="container">
                <div className="item">
                    <img src={require("../../assets/Project-5.png")}alt="" />
                    <h3>Back-End Project</h3>

                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Password Generator </h3>

                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Note Taker </h3>

                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Budget Traker </h3>

                </div>
             


            </div>






        </div>
    )
}
