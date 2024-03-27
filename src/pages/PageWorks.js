import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getPage, getMedia, getAllWorks } from '../utilities/api';

const PageWorks = () => {

      //Fetch data from API endpoint
      const [allWorksData, setAllWorksData] = useState([]);
      const [mediaData, setMediaData] = useState([]);

      const mediaAllWorks = mediaData.find(data=>  (data.id === 185))?.source_url
      console.log("MEDIAWORKS", mediaAllWorks)

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
      
      console.log("WORKS", allWorks)


    return(
        <div>
            <h1>All Works</h1>

            {allWorks && allWorks.map(all_work=>(
            <div>
                <img src={all_work.works_image.url} alt={all_work.works_image.alt}/>
                <p>{all_work.works_title}</p>
                <p>{all_work.toolkit}</p>
            </div>   
            ))}

            <div ><Link to="/individualworks">View Work</Link></div>
        </div>
    );
}
export default PageWorks;