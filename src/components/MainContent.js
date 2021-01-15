import React from 'react';
import Card from './Card';
import './css/MainContent.css';
import functionComponent from '../assets/functionComponent.PNG';
import classComponent from '../assets/classComponent.PNG';


const MainContent = () => {
    return (
        <div className='main-content'>
            {/* <LeftColumn /> */}
            <Card 
                title='Function Based Component'
                text='Here is a basic function component in React. Easier to read and create, but functional components dont have as many features as class based components.'
                src={functionComponent}
                alt='Functional Component'
            />
            <Card 
                title='Class Based Component'
                text='This produces the same result as the function based component, there is more code involved but the benifits of class based components are greater.'
                src={classComponent}
                alt='Class Component'
            />
            
            <p>Function components are prefered if the component does not need to make use of state. If just rendering some basic HTML, function components are the way to go.</p>
            
        </div>
    )
}

export default MainContent;