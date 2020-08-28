import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, price, instructor, image } = props.course;
    return (
        <div className="card col-md-4" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text">Instructor of This Course: {instructor}</p>
                <a onClick={() => props.handlePurchase(props.course)} className="btn btn-outline-success">Enroll Now</a>
            </div>
        </div>
    );
};

export default Course;
