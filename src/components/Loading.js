import React from 'react';
import loading from '../assets/loading-spinner.gif';

const Loading = ({pageName}) => {
    const loadingClassname=`loading-portfolio-${pageName}`
    return(
        <div className={loadingClassname}>
           
            <img src={loading} alt="Loading" className="loading" id="loading"/>
        </div>
    )
}
export default Loading;