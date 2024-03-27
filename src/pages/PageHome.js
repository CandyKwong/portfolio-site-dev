import { Link } from 'react-router-dom';
import { getMedia, getHome } from '../utilities/api';
import React, {useEffect, useState} from 'react';
import arrowIcon from '../assets/arrow-down.svg';
import arrowRightIcon from '../assets/arrow-right.svg';


const PageHome = () => {
  
  //Fetch data from API endpoint 
  const [homeData, setHomeData] = useState([]);
  const [mediaData, setMediaData] = useState([])
  const mediaSrc = mediaData.find(data=>  (data.id === 213))?.source_url
  const mediaHome = mediaData.find(data=>  (data.id === 185))?.source_url
  const featuredWorks = homeData?.acf?.featured_works;
  


  
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
    getHome()
    .then((data) => {
      setHomeData(data)
    })
    .catch((error)=>{
      alert(error);
    });
  }, [])
  

  // const featuredWorks = homeData?.acf?.featured_works;
  



  return (
    <div>
      <h1>Home</h1>
  
<p>{homeData?.acf?.['self-introduction-one']}</p>
<p>{homeData?.acf?.['self-introduction-two']}</p>
<p>{homeData?.acf?.['self-introduction-three']}</p>
<img src={homeData?.acf?.memoji?.url} alt={homeData?.acf?.memoji?.alt}/>
<img src={arrowIcon} alt="Arrow Icon"/>

<h2>{homeData?.acf?.works_heading}</h2>



{featuredWorks && featuredWorks.map((featured_work, index)=>(
  <div key={index}>
    <img src={featured_work.works_image.url} alt={featured_work.works_image.alt}/>
    <p>{featured_work.works_title}</p>
    <p>{featured_work.works_toolkit}</p>
    <img src={arrowRightIcon} alt="Arrow Right Icon"/>


  </div>
))}

<div ><Link to="/works">All Works</Link></div>
    </div>
  );
  
}


export default PageHome;


