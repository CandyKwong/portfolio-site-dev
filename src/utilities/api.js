const BASEAPI = "https://candycreates.ca/portfolio-site/wp-json/wp/v2"



function getMedia() {

    return fetch(`${BASEAPI}/media`)
    .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch(error => {
        throw error;
      });
}



function getPage(){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/pages`)
  .then(response =>{
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch(error=>{
    throw error;
  });
}
function getHome(){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/pages/8?acf_format=standard`)
  .then(response =>{
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch(error=>{
    throw error;
  });
}
function getAbout(){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/pages/11?acf_format=standard`)
  .then(response =>{
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch(error=>{
    throw error;
  });
}
function getAllWorks(){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/pages/13?acf_format=standard`)
  .then(response =>{
   
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch(error=>{
    throw error;
  });
}



function getWork(id){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/work/${id}?acf_format=standard`)
  .then(response=>{
    
  
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
}
function getAllProjects(){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/work`)
  .then(response=>{
    
  
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
}
function getSkill(){
  return fetch(`https://candycreates.ca/portfolio-site/wp-json/wp/v2/skill`)
  .then(response=>{
    
  
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
}

export { getMedia, getPage, getWork, getSkill, getHome, getAbout, getAllWorks, getAllProjects};