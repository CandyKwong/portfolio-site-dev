import React, {useEffect, useState} from 'react';
import { getMedia, getSkill, getAbout } from '../utilities/api';
import Loading from '../components/Loading';


const PageAbout = () => {

    //Fetch data from API endpoint
    const [aboutData, setAboutData] = useState([]);
    const [mediaData, setMediaData] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const [expandFact, setExpandFact] = useState(null);
    const [selectFilter, setSelectFilter] = useState([0]);
   
    

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
        getAbout()
        .then((data) => {
          setAboutData(data)
          setIsLoading(false)
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

      const toggleFact = (index) => {
        if (expandFact === index){
          setExpandFact(null);
        }else{
          setExpandFact(index);
        }
      };



   

return(
  <>
  {isLoading? 
  <Loading />
  
  :
    
        <div className="about-wrapper">
          <div className="bio-wrapper">
            <img src={aboutData?.acf?.['self-portrait']?.url} alt={aboutData?.acf?.['self-portrait']?.alt}/>
            <h1>About Me</h1>
            <p>{aboutData?.acf?.['introduction']}</p>
          </div>
            <div className="skills-title">
              <h2>Skills</h2>
            </div>
            <section className="techstack-section">
              <div className="filter-section">
               
                <ul>
                  <li className={`filter-buttons ${selectFilter[0] === 0 ? 'active' : ''}`} onClick={() => setSelectFilter([0])}>Development Skills</li>
                  <li className={`filter-buttons ${selectFilter[0] === 1 ? 'active' : ''}`} onClick={() => setSelectFilter([1])}>Design Skills</li>
                  <li className={`filter-buttons ${selectFilter[0] === 2 ? 'active' : ''}`} onClick={() => setSelectFilter([2])}>Soft Skills</li>
                </ul>
              </div>
              
               <div className="skills-container">
                            {skillsData?.map((skillSet, index) => (
                                <ul key={index} className={selectFilter[0] !== index ? 'hidden' : ''}>
                                    {skillSet.acf.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex}>{skill}</li>
                                    ))}
                                </ul>
                            ))}
                        </div>
            </section>
       
            
          <section className="facts-section">
            {aboutData?.acf?.['fun_facts'].map((fact, index)=>
            <div className="facts-wrapper" key={index}>
            <dl>
                <dt onClick={()=> toggleFact(index)}>{fact.question}</dt>
                {expandFact === index && <dd>{fact.answer}</dd>}
              
            </dl>
            </div>
            )}
          </section>
          <section>
            <div className="other-interests">
            <h2>{aboutData?.acf?.['other_interests']}</h2>
            <p dangerouslySetInnerHTML={{ __html: aboutData?.acf?.['restaurants'] }}></p>
            <p dangerouslySetInnerHTML={{ __html: aboutData?.acf?.['hiking'] }}></p>
            <p dangerouslySetInnerHTML={{ __html: aboutData?.acf?.['travelling'] }}></p>
            <p dangerouslySetInnerHTML={{ __html: aboutData?.acf?.['swimming'] }}></p>
            <p dangerouslySetInnerHTML={{ __html: aboutData?.acf?.['weight_lifting'] }}></p>
            </div> 
          </section>
         
            <div className="about-collage-section">
              <img src={aboutData?.acf?.['collage-one'].url} alt={aboutData?.acf?.['collage-one'].alt}/>
              <img src={aboutData?.acf?.['collage-two'].url} alt={aboutData?.acf?.['collage-two'].alt}/>
              <img src={aboutData?.acf?.['collage-three'].url} alt={aboutData?.acf?.['collage-three'].alt}/>
              <img src={aboutData?.acf?.['collage-four'].url} alt={aboutData?.acf?.['collage-four'].alt}/> 
            </div>
         
        </div>
}
  </>
    
)}

export default PageAbout;

   




   
