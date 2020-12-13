import React from 'react';
import Header from '../Header';

function HomePage() {
    return (
        <>
            <Header/>
        <p style={paragraphStyle}>This is a Intro for this page and why you should use it!.................................................................
        ............................................
        .........................................................
        ........................................................
        .......................................................
        .........................................................</p>
        </> 
    )
}

const paragraphStyle = {
    textAlign: 'center',
    padding: '100px'
}

export default HomePage;
