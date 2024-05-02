import { Link } from 'react-router-dom';
import { getMedia, getHome, getAllProjects} from '../utilities/api';
import React, {useEffect, useState, useRef} from 'react';
import arrowRightIcon from '../assets/arrow-right.svg';
import Loading from '../components/Loading';
import arrowDownIcon from '../assets/down-arrow2.gif';


const PageHome = () => {
  
  //Fetch data from API endpoint 
  const [homeData, setHomeData] = useState([]);
  const [mediaData, setMediaData] = useState([])
  const featuredWorks = homeData?.acf?.featured_works;
  const[isLoading, setIsLoading] = useState(true);
  const homeRef = useRef(null);
  const [allProjects, setAllProjects] = useState([]);
  


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

  useEffect(() => {
    getAllProjects()
      .then((data) => {
        setAllProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  

  const getProjId = (title) => {
    return allProjects.find((proj) => title.includes(proj.acf.works_title))?.id;
};

  const scrollToSection = () => {
    homeRef.current.scrollIntoView({behavior: 'smooth'});
  };
    // Parallax effect logic
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed'));
        element.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
  
  return (
    <>
     {isLoading? 
  <Loading pageName="home"/>
  
  :
  
   <div className="wrapper">
  
  
<section className="self-intro-section"> 
  <div className="home-abovefold-wrapper">
    <div className="home-abovefold">
      <h1 className="fade-in-text">{homeData?.acf?.['self-introduction-one']}</h1>
      <h2 className="fade-in-text">{homeData?.acf?.['self-introduction-two']}</h2>
      <h2 className="fade-in-text">{homeData?.acf?.['self-introduction-three']}</h2>
    </div>
    
    <figure className="home-memoji">
      <img src={homeData?.acf?.memoji?.url} alt={homeData?.acf?.memoji?.alt}/>
    </figure>
  </div>

    <div className="down-arrow-icon">
    <img src={arrowDownIcon} alt="Down Arrow Icon" className="down-arrow-icon" onClick={scrollToSection} />
    </div>
</section>
  


 
    <h3 className="featured-works-title">{homeData?.acf?.works_heading}</h3>
 

  <section className="featured-works-wrapper" ref={homeRef}>
    
  {featuredWorks &&
   featuredWorks.map((featured_work, index)=>{
    const projectId = getProjId(featured_work?.works_title);

    return (
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
          

              <Link to={`/individualworks/${projectId}`} className="right-arrow-icon">
                <img src={arrowRightIcon} alt="Arrow Right Icon"/>
              </Link>

            </div>
          </div>
        </article>

      
      </div>
   );

  })}
   
  </section>
  <a className="all-works-button"><Link to="/works">All Works</Link></a>
  
  </div>

}
    </>
  
    
    )}


export default PageHome;


