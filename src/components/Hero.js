import React from 'react';
import Navbar from './Navbar';


class Hero extends React.Component {

    render() {
        return (
            <div className="hero">
                <Navbar />
                <div className="hero-section">
                    <h1 className="title">
                        {this.props.data.title}
                    </h1>
                    <h3 className="heading">
                        {this.props.data.heading}
                    </h3>
                </div>
            </div>
        )
    }
}

export default Hero;