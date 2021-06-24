import React from 'react';

const FeatureBox = ({image,title}) => {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={image} alt="" />
            </div>
            <div className="a-b-text">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
        </div>
    );
};

export default FeatureBox;