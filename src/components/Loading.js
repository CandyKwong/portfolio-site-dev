import React from 'react';
// import loading from '../assets/loading2.png';
import loading from '../assets/loading-spinner.gif';

const Loading = () => {
    return(
        <div className="loading">
            <p>Loading...</p>
            {/**add a spinner animation here */}
            <img src={loading} alt="Loading" className="loading" id="loading"/>
        </div>
    )
}
export default Loading;