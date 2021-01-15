import React from 'react';
import Card from './Card';
import './css/RightColumn.css';


const RightColumn = () => {
    return (
        <div className='rightcolumn'>
            <div className='row'>
                <div className='col'>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default  RightColumn;