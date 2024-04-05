import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPage, getMedia, getAllWorks } from '../utilities/api';
import Loading from '../components/Loading';

const PageWorks = () => {

      //Fetch data from API endpoint
      const [allWorksData, setAllWorksData] = useState([]);
      const [mediaData, setMediaData] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const mediaAllWorks = mediaData.find(data=>  (data.id === 185))?.source_url
      
      const params = useParams();
      const id = params.id



      useEffect(() => {
        getMedia()
        .then((data) => {
          setMediaData(data)
          setIsLoading(false)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])


      useEffect(() => {
        getAllWorks()
        .then((data) => {
          setAllWorksData(data)
          setIsLoading(false)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])

      const allWorksData1 = allWorksData?.[1]?.acf;
      const allWorks = allWorksData?.acf?.all_works;
      
      
  
    return(
      <>
      {isLoading? 
      <Loading pageName="works"/>
      
      :
        <div class="works-wrapper">
            <h1>All Works</h1>

            {allWorks && allWorks.map(all_work=>(
            <div className="works-cards">
              <article className="works-single-card">
                <img src={all_work.works_image.url} alt={all_work.works_image.alt}/>
                <div className="works-single-card-info">
                  <h2>{all_work.works_title}</h2>
                  <p>{all_work.toolkit}</p>
                
                  {/* <a className="view-work-button" > */}
                    {console.log(all_work.id)}
                  <Link to={`/individualworks/${all_work.id}`}>View Work</Link>
                  {/* <Link to={`/individualworks/${id}`}>View Work</Link> */}
                  {/* <Link to={`/individualworks/`}>View Work</Link> */}
                    {/* </a> */}
                </div>
              </article>
            </div>   

            ))}

          
        </div>
      }
      </>
    );
            
}
export default PageWorks;