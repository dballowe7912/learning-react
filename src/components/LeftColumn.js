import React from 'react';
import Card from './Card';
import './css/LeftColumn.css';
import onChange from '../assets/onChange.PNG';

const LeftColumn = () => {
    return (
        <div className='leftcolumn'>
            <div className='row'>
                <div className='col'>
                    <Card 
                        title='React OnChange Event Handler'
                        src={onChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftColumn;