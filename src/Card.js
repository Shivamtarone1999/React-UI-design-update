import React from 'react';
import './Card.css';
// import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts'

function Card({ cardHead, cardContent, image }) {

    return (
        <>
            <div className="card">
                <div className="card__head">
                    <h3> {cardHead} </h3>

                    <div className="card__content">
                        <h2>{cardContent}</h2>
                    </div>
                </div>

                <div className="image__section">
                    <div></div>

                    <img className="image" src={image} />

                </div>

            </div>


        </>
    )
}

export default Card
