import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getPage, getMedia, getAllWorks } from '../utilities/api';

const PageWorks = () => {

      //Fetch data from API endpoint
      const [allWorksData, setAllWorksData] = useState([]);
      const [mediaData, setMediaData] = useState([]);

      const mediaAllWorks = mediaData.find(data=>  (data.id === 185))?.source_url
      

      useEffect(() => {
        getMedia()
        .then((data) => {
          setMediaData(data)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])


      useEffect(() => {
        getAllWorks()
        .then((data) => {
          setAllWorksData(data)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])

      const allWorksData1 = allWorksData?.[1]?.acf;
      const allWorks = allWorksData?.acf?.all_works;
      
    


    return(
        <div class="works-wrapper">
            <h1>All Works</h1>

            {allWorks && allWorks.map(all_work=>(
            <div className="works-cards">
              <article className="works-single-card">
                <img src={all_work.works_image.url} alt={all_work.works_image.alt}/>
                <h2>{all_work.works_title}</h2>
                <p>{all_work.toolkit}</p>
                <a className="view-work-button" ><Link to="/individualworks">View Work</Link></a>
              </article>
            </div>   
            ))}

            {/* <a className="view-work-button" ><Link to="/individualworks">View Work</Link></a> */}
        </div>
    );
}
export default PageWorks;