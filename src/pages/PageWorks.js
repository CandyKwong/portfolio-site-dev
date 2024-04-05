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



      // const allWorksData1 = allWorksData?.[1]?.acf;
      const allWorksData1 = allProjects?.[1]?.acf;
      console.log("hi", mediaData)
      // const allWorks = allWorksData?.acf?.all_works;
      
      // const projectID = allProjects?.[0]?.acf?.id
      // console.log('Project ID', allProjects?.[0]?.id)

      
  
    return(
      <>
      {isLoading? 
      <Loading pageName="works"/>
      
      :
        <div class="works-wrapper">
            <h1>All Works</h1>

            {allProjects && allProjects.map(allWork=>(
            <div className="works-cards">
            
              <article className="works-single-card">
                {/* GEt media, remove your console logs */}
                {/* <img src={allWork?.guid?.rendered} alt={'eheh'}/> */}

                {/* <img src={all_work.works_image.url} alt={all_work.works_image.alt}/> */}
                {/*insert images REST API here*/}

                {mediaData.map((media) => (
                                    allWork?.acf?.works_image &&
                                    media.id === allWork?.acf?.works_image.id && (
                                        <img
                                            src={media.source_url}
                                            alt={allWork?.acf?.works_image.alt}
                                            
                                            key={media.id}
                                        />
                                    )
                                ))}

                                
                <div className="works-single-card-info">
                   <h2>{allWork?.acf?.works_title}</h2> 
                  <p>{allWork?.acf?.toolkit}</p>
                
                  {/* <a className="view-work-button" > */}

                  <Link to={`/individualworks/${allWork?.id}`}>View Work</Link>
                
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