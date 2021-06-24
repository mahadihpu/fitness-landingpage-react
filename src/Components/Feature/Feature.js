import React from 'react';
import FeatureBox from './FeatureBox';
import fImage1 from '../../images/1.svg';
import fImage2 from '../../images/2.svg';
import fImage3 from '../../images/3.svg';
import fImage4 from '../../images/4.svg';

const Feature = () => {
    return (
        <div id="features">
            <h1 style={{marginTop:'-30px'}}>FEATURES</h1>
            <div className="a-container">
                <FeatureBox image={fImage1} title="Weight Lifting"/>
                <FeatureBox image={fImage2} title="Specific Muscle"/>
                <FeatureBox image={fImage3} title="Flex your Muscle"/>
                <FeatureBox image={fImage4} title="Cardio Excise"/>
            </div>
        </div>
    );
};

export default Feature;