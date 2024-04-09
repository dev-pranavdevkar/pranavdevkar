import React from "react";

export default function About() {
    const selfInfo=[
        {title:'Name', data:'Pranav Devkar' },
        {title:'Email ID', data:'pranavdevkar1311@gmail.com' },
        {title:'Contact No', data:'+91 7719082727' },
        {title:'Address', data:'Gultekdi, Pune 411037' },
        {title:'Education', data:'Master Of Computer Application (MCA)' },
        
    ]
  return (
    <section className="container" id="about">
      <div className="row h-100 d-flex align-items-center">
        <div className="col-lg-5 ">
          <img src="images/about.png" alt="about img" />
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className="about-content-area">
            <h1 className="text-warning">About</h1>
            {/* <pre>
              {`
        const aboutMe = {
            name : 'laura pinto',
            email : 'lauraalpinto@gmail.com',
            position : 'front-end developer',
            website: 'lauraalpinto.github.io'
        };
        `}
            </pre> */}
            <div className="">
                <p>
                Passionate frontend developer skilled in HTML, CSS, and Bootstrap, NextJS dedicated to crafting visually appealing and user-friendly websites. Committed to delivering seamless digital experiences that elevate businesses and engage users.
                </p>
                <div className="self-info">

                  {selfInfo.map((data,index)=>(
                    <div key={index}>
                        
                        <span className="text-danger">{data.title}</span> <span className="text-primary">:</span> <span>{data.data}</span>
                    </div>
                  ))}
                 
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
