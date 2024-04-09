import React from "react";

export default function Projects() {
  const projectInfo = [
    {
      title: "The CCID",
      image: "images/projects/cciid.png",
      link:""
    },
    {
        title: "B4 School",
        image: "images/projects/B4School.png",
        link:""
      },
      {
        title: "Arromton",
        image: "images/projects/arromton.png",
        link:""
      },
      {
        title: "Eton Buld Mart",
        image: "images/projects/eton.png",
        link:""
      },
      {
        title: "Flexiglobe Advisors",
        image: "images/projects/flexiglobe.png",
        link:""
      },
      {
        title: "The Kiwasara Group",
        image: "images/projects/kiwasaragroup.png",
        link:""
      },
      {
        title: "Mutha & Rathod Timber Industries LLP",
        image: "images/projects/MandR.png",
        link:""
      },
      {
        title: "Nandi Nivesh",
        image: "images/projects/nandiNivesh.png",
        link:""
      },
      {
        title: "vidyasagar Academy",
        image: "images/projects/vidyasagar.png",
        link:""
      },
      {
        title: "VVED Veg Restaurant",
        image: "images/projects/vved.png",
        link:""
      },
    
      {
        title: "Personality Integrator",
        image: "images/projects/personalityintegrator.png",
        link:""
      },
    
  ];

  return (
    <section className="container" id="portfolio">
      <div className="project-content-area">
        <div className="row h-100 d-flex align-items-center">
          <div className="col-12 mb-5 text-center">
            <h1 className="text-warning">Portfolio</h1>
          </div>
          {projectInfo.map((project, index) => (
            <div className="col-lg-3" key={index}>
            <div className=" card project-card card-outline-warning mb-5" >
            
            
            <div className="card-body">
            <img className="card-img-top" src={project.image} alt="{project.title}"></img>
            </div>
              </div>
            </div>
          ))}
          <div className="col-lg-3">
            <div className=" card project-card mb-5" >
            
            
            <div className="card-body">
           <h3>Sprightsoft</h3>
           <h5>Spright Software Systems</h5>
            </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
