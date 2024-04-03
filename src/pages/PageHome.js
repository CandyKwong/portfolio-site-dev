import { Link } from 'react-router-dom';
import { getMedia, getHome } from '../utilities/api';
import React, {useEffect, useState, useRef} from 'react';
import arrowRightIcon from '../assets/arrow-right.svg';
import Loading from '../components/Loading';



const PageHome = () => {
  
  //Fetch data from API endpoint 
  const [homeData, setHomeData] = useState([]);
  const [mediaData, setMediaData] = useState([])
  const mediaSrc = mediaData.find(data=>  (data.id === 213))?.source_url
  const mediaHome = mediaData.find(data=>  (data.id === 185))?.source_url
  const featuredWorks = homeData?.acf?.featured_works;
  const[isLoading, setIsLoading] = useState(true);
  const homeRef = useRef(null);


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
    getHome()
    .then((data) => {
      setHomeData(data)
      setIsLoading(false)
      
    })
    .catch((error)=>{
      alert(error);
    });
  }, [])

  const scrollToSection = () => {
    homeRef.current.scrollIntoView({behavior: 'smooth'});
  };

  
  
  return (
    <>
     {isLoading? 
  <Loading pageName="home"/>
  
  :
  
   <div className="wrapper">
  
  
<section className="self-intro-section"> 
  <div className="home-abovefold-wrapper">
    <div className="home-abovefold">
      <h1>{homeData?.acf?.['self-introduction-one']}</h1>
      <h2>{homeData?.acf?.['self-introduction-two']}</h2>
      <h2>{homeData?.acf?.['self-introduction-three']}</h2>
    </div>
    
    <figure className="home-memoji">
      <img src={homeData?.acf?.memoji?.url} alt={homeData?.acf?.memoji?.alt}/>
    </figure>
  </div>

    <div className="down-arrow-icon">
    <img src={require('../assets/down-arrow2.gif')} alt="Down Arrow Icon" className="down-arrow-icon" onClick={scrollToSection} />
    </div>
</section>
  

<section className="featured-works-wrapper" ref={homeRef}>
  <h3 className="featured-works-title">{homeData?.acf?.works_heading}</h3>


  {featuredWorks && featuredWorks.map((featured_work, index)=>(
  <div key={index} className="featured-works">
    <article className="featured-works-cards">
      <div className="featured-works-macbook">
        <img src={featured_work.works_image.url} alt={featured_work.works_image.alt}/>
      </div>
      <div className="featured-works-info">
        <div className="featured-works-content">
          <h4>{featured_work.works_title}</h4>
          <ul>
            <li>{featured_work.works_toolkit}</li>
          </ul>
        
          <Link to="/individualworks" className="right-arrow-icon">
            <img src={arrowRightIcon} alt="Arrow Right Icon"/>
          </Link>
        </div>
      </div>
    </article>

  
  </div>

  ))}

  
  <a className="all-works-button"><Link to="/works">All Works</Link></a>
  </section>
  </div>

}
    </>
  
    
    )}


export default PageHome;


