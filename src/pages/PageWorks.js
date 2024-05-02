import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPage, getMedia, getAllWorks, getAllProjects} from '../utilities/api';
import Loading from '../components/Loading';

const PageWorks = () => {

      //Fetch data from API endpoint
      const [allWorksData, setAllWorksData] = useState([]);
      const [allProjects, setAllProjects] = useState([])
      const [mediaData, setMediaData] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const mediaAllWorks = mediaData.find(data=>  (data.id === 185))?.source_url
      
      const params = useParams();
      const id = params.id



      useEffect(() => {
        getMedia()
        .then((data) => {
          console.log("MEDIA DATA ON WORKS PAGE", data)
          setMediaData(data)
          setIsLoading(false)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])


      // useEffect(() => {
      //   getAllWorks()
      //   .then((data) => {
      //     setAllWorksData(data)
      //     setIsLoading(false)
      //   })
      //   .catch((error)=>{
      //     alert(error);
      //   });
      // }, [])

      useEffect(() => {
        getAllProjects()
        .then((data) => {
          
          setAllProjects(data)
          setIsLoading(false)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])
      
      
      const allWorksData1 = allProjects?.[1]?.acf;
    
    return(
      <>
      {isLoading? 
      <Loading pageName="works"/>
      
      :
        <div class="works-wrapper">
            <h1>All Works</h1>

            {allProjects.map(allWork=>(
             
            <div className="works-cards" key={allWork.id}>
            
              <article className="works-single-card">
             

                {mediaData.map((media) => (
                                    allWork.acf.screens &&
                                    media.id === allWork.acf.screens && (
                                        <img
                                          src={media.source_url}
                                          alt={media.alt_text}
                                          key={media.id}
                                        />
                                    )
                                ))}
              

                                
                <div className="works-single-card-info">
                   <h2>{allWork.acf.works_title}</h2> 
                  <p>{allWork.acf.toolkit}</p>
                  <Link to={`/individualworks/${allWork.id}`}>View Work</Link>
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