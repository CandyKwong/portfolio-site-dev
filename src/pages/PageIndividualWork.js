import React, {useEffect, useState} from 'react';
import { getWork, getMedia } from '../utilities/api';
import { Link } from 'react-router-dom';


const PageIndividualWork = () => {

    const [workData, setWorkData] = useState([]);
    
    const [mediaData, setMediaData] = useState([]);
    
    const mediaWork = mediaData.find(data=>  (data.id === 165))?.source_url
    const acfWorkData = workData?.acf;
    const mediaHighlightImg = mediaData.find(data=>  (data.id === 210))?.source_url
    
    

    useEffect(() => {
        getWork()
        .then((data) => {
            
          setWorkData(data)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])

      useEffect(() => {
        getMedia()
        .then((data) => {
            setMediaData(data)
        })
        .catch((error)=>{
            alert(error);
        });
        }, [])

    return(
        <div className="individual-work-wrapper">
            <article className="indivdual-work-container">
                <section className="work-overview-container">
                    <div className="mockup-screens">
                        <img src={workData?.acf?.screens?.url} alt={workData?.acf?.screens?.alt}/>
                    </div>
                    <div className="work-roles-toolkit">
                        <h1>{acfWorkData?.works_title}</h1>
                        <h2>{acfWorkData?.roles_title}</h2>
                        <p>{acfWorkData?.roles}</p>
                        <h2>{acfWorkData?.toolkit_title}</h2>
                        <p>{acfWorkData?.toolkit}</p>
                    </div>
                    <div className="work-overview">
                        <h3>{acfWorkData?.overview_title}</h3>
                        <p>{acfWorkData?.overview}</p>
                    </div>
                    <div className="view-site-button">
                        <Link to={acfWorkData?.works_url} target="_blank" rel="noopener noreferrer">View Live Site</Link>
                    </div>
                </section>
         
            {/* <Link to={acfWorkData?.works_url} target="_blank" rel="noopener noreferrer">View Live Site</Link> */}
            <div className="work-info-wrapper">
                <div className="work-accordian">
                    <section className="highlights-wrapper">
                    <h3>{acfWorkData?.['highlights_title']}</h3>
                    {acfWorkData && acfWorkData.highlights && acfWorkData.highlights.map((highlight, index) => (
                    <div key={index}>
                        <div className="highlights-img">
                            <img src={highlight['highlight-image'].url} alt={highlight['highlight-image'].alt}/>
                        </div>
                        <div className="highlights-text">
                            {/* <p>{highlight['highlight-text']}</p> */}
                            <p dangerouslySetInnerHTML={{__html: highlight['highlight-text']}}></p>
                        </div>
                    
                    
                </div>
            
            ))}
                        
                    </section>
            </div>
                <div className="process-wrapper">
                    <h3>{acfWorkData?.process_title}</h3>
                    <p dangerouslySetInnerHTML={{__html:acfWorkData?.process}}></p>
                </div>
                <div className="reflection-wrapper">
                    <h3>{acfWorkData?.reflection_title}</h3>
                    <p dangerouslySetInnerHTML={{__html:acfWorkData?.reflection}}></p> 
                </div>
                </div>
            </article>
        </div>
            
            
            
        // </div>
    );
}
export default PageIndividualWork;