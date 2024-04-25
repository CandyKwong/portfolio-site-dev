import React, { useEffect, useState } from 'react';
import { getWork, getMedia, getSingleWork } from '../utilities/api';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const PageIndividualWork = () => {
    const [workData, setWorkData] = useState([]);
    const [mediaData, setMediaData] = useState([]);
    const [expandWorkInfo, setExpandWorkInfo] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const id = params.id

    console.log('ID!!!', id)
   

    useEffect(() => {
        getWork()
            .then((data) => {
                setWorkData(data);
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error);
            });
    }, []);



    useEffect(() => {
        getMedia()
            .then((data) => {
                setMediaData(data);
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    useEffect(() => {
        getSingleWork(id)
            .then((data) => {
                console.log('SINGLE WORK', data)
                setWorkData(data);
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error);
            });
    }, [id]);

    const toggleWorkInfo = (sectionIndex) => {
        setExpandWorkInfo(sectionIndex === expandWorkInfo ? null : sectionIndex);
    };

    return (
        <>
        {isLoading? 
        <Loading pageName="individualworks"/>
        
        :
        <div className="individual-work-wrapper">
            <article className="indivdual-work-container">
                <section className="work-overview-container">
                    <div className="mockup-screens">
                        <img src={workData?.acf?.screens?.url} alt={workData?.acf?.screens?.alt} />
                    </div>
                    <div className="work-roles-toolkit">
                        <h1>{workData?.acf?.works_title}</h1>
                        <div className="work-roles-toolkit-wrapper">
                            <div className="work-roles-container">
                                <h2>{workData?.acf?.roles_title}</h2>
                                <p>{workData?.acf?.roles}</p>
                            </div>
                            <div className="work-toolkit-container">
                                <h2>{workData?.acf?.toolkit_title}</h2>
                                <p>{workData?.acf?.toolkit}</p>
                           </div>
                        </div>
                    </div>
                    <div className="work-overview">
                        <h3>{workData?.acf?.overview_title}</h3>
                        <p>{workData?.acf?.overview}</p>
                    </div>
                    <div className="view-site-button">
                        <Link to={workData?.acf?.works_url} target="_blank" rel="noopener noreferrer">
                            View Live Site
                        </Link>
                    </div>
                </section>

                <div className="work-info-wrapper">
                    <div className="work-accordian">
                        <section className="highlights-wrapper">
                            <div className="work-accordian-title">
                                <h3 onClick={() => toggleWorkInfo(0)}>{workData?.acf?.highlights_title}</h3>
                            </div>
                            {expandWorkInfo === 0 && (
                                <div>
                                    {workData?.acf?.highlights &&
                                        workData.acf.highlights.map((highlight, index) => (
                                            <div className="work-highlight"key={index}>
                                                <div className="highlights-img">
                                                    <img
                                                        src={highlight['highlight-image']?.url}
                                                        alt={highlight['highlight-image']?.alt}
                                                    />
                                                </div>
                                                <div className="highlights-text">
                                                    <p dangerouslySetInnerHTML={{ __html: highlight['highlight-text'] }}></p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </section>

                        <section className="process-wrapper">
                            <div className="work-accordian-title">
                                <h3 onClick={() => toggleWorkInfo(1)}>{workData?.acf?.process_title}</h3>
                            </div>
                            {expandWorkInfo === 1 && (
                                
                                <p dangerouslySetInnerHTML={{ __html: workData?.acf?.process }}></p>
                            )}
                                
                        </section>

                        <section className="reflection-wrapper">
                            <div className="work-accordian-title">
                                <h3 onClick={() => toggleWorkInfo(2)}>{workData?.acf?.reflection_title}</h3>
                            </div>
                            {expandWorkInfo === 2 && (
                                <p dangerouslySetInnerHTML={{ __html: workData?.acf?.reflection }}></p>
                            )}
                        </section>
                    </div>
                </div>
            </article>
        </div>
    }
        </>
    );
};

export default PageIndividualWork;