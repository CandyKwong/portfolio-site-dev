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
    
        <div className="about-wrapper">
          <div className="bio-wrapper">
            <img src={aboutData?.acf?.['self-portrait']?.url} alt={aboutData?.acf?.['self-portrait']?.alt}/>
            <h1>About Me</h1>
            <p>{aboutData?.acf?.['introduction']}</p>
          </div>
          <section className="techstack-section">
            <h2>Skills</h2>
              <div className="filter-section">
                <ul>
                  <li className="filter-buttons">Development Skills</li>
                  <li className="filter-buttons">Design Skills</li>
                  <li className="filter-buttons">Soft Skills</li>
                </ul>
              </div>
              <div class="skills-container">
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
              </div>
          </section> 
            
          <section>
            {aboutData?.acf?.['fun_facts'].map(fact=>
            <div className="facts-wrapper">
            <dl>
                <dt>{fact.question}</dt>
                <dd>{fact.answer}</dd>
            </dl>
            </div>
            )}
          </section>
          <section>
            <div className="other-interests">
            <h2>{aboutData?.acf?.['other_interests']}</h2>
            <p>{aboutData?.acf?.['restaurants']}</p>
            <p>{aboutData?.acf?.['hiking']}</p>
            <p>{aboutData?.acf?.['travelling']}</p>
            <p>{aboutData?.acf?.['weight_lifting']}</p>
            </div> 
          </section>
          <section>
            <div className="collage-section">
             <img src={aboutData?.acf?.['collage-one'].url} alt={aboutData?.acf?.['collage-one'].alt}/>
            <img src={aboutData?.acf?.['collage-two'].url} alt={aboutData?.acf?.['collage-two'].alt}/>
            <img src={aboutData?.acf?.['collage-three'].url} alt={aboutData?.acf?.['collage-three'].alt}/>
            <img src={aboutData?.acf?.['collage-four'].url} alt={aboutData?.acf?.['collage-four'].alt}/> 
            </div>
          </section>
        </div>
  

    
)}

export default PageAbout;

   




   
