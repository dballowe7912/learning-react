import React, { Component } from 'react';
import './css/Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.title}</h2>
                <h5>{this.props.subtitle}</h5>
                <div className="image">
                    <img className='image1' src={this.props.src} alt={this.props.alt}/>
                </div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Card;