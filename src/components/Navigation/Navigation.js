import React from 'react';

const Navigation = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">ONLINE COURSES</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="#">Courses Added: {props.length}</a>
                        <a className="nav-item nav-link active" href="#">Total Price: {props.totalPrice.toFixed(2)}</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;