import React, {useEffect, useState} from 'react';
import { getWork, getMedia } from '../utilities/api';
import { Link } from 'react-router-dom';


const PageIndividualWork = () => {

    const [workData, setWorkData] = useState([]);
    console.log("work",workData)
    const [mediaData, setMediaData] = useState([]);
    console.log("media",mediaData)
    const mediaWork = mediaData.find(data=>  (data.id === 165))?.source_url
    const acfWorkData = workData?.acf;
    const mediaHighlightImg = mediaData.find(data=>  (data.id === 210))?.source_url
    console.log("HIGHLIGHT", mediaHighlightImg)
    

    useEffect(() => {
        getWork()
        .then((data) => {
            console.log("getWork()", data)
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
        <div>
            <img src={workData?.acf?.screens?.url} alt={workData?.acf?.screens?.alt}/>
            <h1>{acfWorkData?.works_title}</h1>
            <p>{acfWorkData?.roles_title}</p>
            <p>{acfWorkData?.roles}</p>
            <p>{acfWorkData?.toolkit_title}</p>
            <p>{acfWorkData?.toolkit}</p>
            <p>{acfWorkData?.overview_title}</p>
            <p>{acfWorkData?.overview}</p>
         
            <Link to={acfWorkData?.works_url} target="_blank" rel="noopener noreferrer">View Live Site</Link>
            
            <p>{acfWorkData?.['highlights_title']}</p>
            {acfWorkData && acfWorkData.highlights && acfWorkData.highlights.map((highlight, index) => (
            <div key={index}>
                <img src={highlight['highlight-image'].url} alt={highlight['highlight-image'].alt}/>
                <p>{highlight['highlight-text']}</p>
            </div>
            ))}

            <p>{acfWorkData?.process_title}</p>
            <p>{acfWorkData?.process}</p>
            <p>{acfWorkData?.reflection_title}</p>
            <p>{acfWorkData?.reflection}</p> 
        </div>
    );
}
export default PageIndividualWork;