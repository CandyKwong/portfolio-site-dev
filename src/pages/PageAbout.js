import React, {useEffect, useState} from 'react';
import { getMedia, getSkill, getAbout } from '../utilities/api';

const PageAbout = () => {

    

    //Fetch data from API endpoint
    const [aboutData, setAboutData] = useState([]);
    const [mediaData, setMediaData] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
   
    

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
        getAbout()
        .then((data) => {
          setAboutData(data)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])
      

      useEffect(() => {
        getSkill()
        .then((data) => {
          console.log('SKILL DATA', data)
          setSkillsData(data)
        })
        .catch((error)=>{
          alert(error);
        });
      }, [])



   

return(
    
        <div>
            <h1>About</h1>
        
            <p>{aboutData?.acf?.['introduction']}</p>
            <img src={aboutData?.acf?.['self-portrait']?.url} alt={aboutData?.acf?.['self-portrait']?.alt}/>
            
            {aboutData?.acf?.['fun_facts'].map(fact=>
            <dl>
                <dt>{fact.question}</dt>
                <dd>{fact.answer}</dd>
                </dl>
            )}

              <h2>Skills</h2>
            {skillsData?.[0]?.acf?.skills.map(skill=>
            <ul>
                <li>{skill}</li>
                </ul>
            )}

            {skillsData?.[1]?.acf?.skills.map(skill=>
            <ul>
                <li>{skill}</li>
                </ul>
            )}

            {skillsData?.[2]?.acf?.skills.map(skill=>
            <ul>
                <li>{skill}</li>
                </ul>
            )}  
            <h2>{aboutData?.acf?.['other_interests']}</h2>
            <p>{aboutData?.acf?.['restaurants']}</p>
            <p>{aboutData?.acf?.['hiking']}</p>
            <p>{aboutData?.acf?.['travelling']}</p>
            <p>{aboutData?.acf?.['weight_lifting']}</p> 
             <img src={aboutData?.acf?.['collage-one'].url} alt={aboutData?.acf?.['collage-one'].alt}/>
            <img src={aboutData?.acf?.['collage-two'].url} alt={aboutData?.acf?.['collage-two'].alt}/>
            <img src={aboutData?.acf?.['collage-three'].url} alt={aboutData?.acf?.['collage-three'].alt}/>
            <img src={aboutData?.acf?.['collage-four'].url} alt={aboutData?.acf?.['collage-four'].alt}/> 
        </div>
  

    
)}

export default PageAbout;

   




   
