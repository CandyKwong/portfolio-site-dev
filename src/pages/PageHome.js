import { Link } from 'react-router-dom';
import { getMedia, getHome } from '../utilities/api';
import React, {useEffect, useState} from 'react';
import arrowIcon from '../assets/arrow-down.svg';
import arrowRightIcon from '../assets/arrow-right.svg';
// import Loading from '../src/components/Loading';
import Loading from '../components/Loading';




const PageHome = () => {
  
  //Fetch data from API endpoint 
  const [homeData, setHomeData] = useState([]);
  const [mediaData, setMediaData] = useState([])
  const mediaSrc = mediaData.find(data=>  (data.id === 213))?.source_url
  const mediaHome = mediaData.find(data=>  (data.id === 185))?.source_url
  const featuredWorks = homeData?.acf?.featured_works;
  const[isLoading, setIsLoading] = useState(true);



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

  
  
  return (
    <>
   {isLoading?
   <Loading/>
   
   :
   <div className="wrapper">
     <Loading/>
   {/* <h1>Home</h1> */}
  
<section className="self-intro-section"> 
  <h1>{homeData?.acf?.['self-introduction-one']}</h1>
  <h2>{homeData?.acf?.['self-introduction-two']}</h2>
  <p>{homeData?.acf?.['self-introduction-three']}</p>
</section>

<figure>
  <img src={homeData?.acf?.memoji?.url} alt={homeData?.acf?.memoji?.alt}/>
</figure>

<div>
<img src={arrowIcon} alt="Arrow Icon"/>
</div>

<section className="featured-works-wrapper">
<h2>{homeData?.acf?.works_heading}</h2>



{featuredWorks && featuredWorks.map((featured_work, index)=>(
<div key={index} className="featured-works">
  <article className="featured-works-cards">
    <img src={featured_work.works_image.url} alt={featured_work.works_image.alt}/>
    <div>
      <h3>{featured_work.works_title}</h3>
      <ul>
      <li>{featured_work.works_toolkit}</li>
      </ul>
      <img src={arrowRightIcon} alt="Arrow Right Icon"/>
    </div>
  </article>

 
</div>

))}

{/* <div ><Link to="/works">All Works</Link></div> */}
<a className="all-works-button"><Link to="/works">All Works</Link></a>
</section>
 </div>

}
   </>

  
  )}
  


export default PageHome;


