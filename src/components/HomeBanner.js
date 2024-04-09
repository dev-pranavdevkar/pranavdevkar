import React from "react";
export default function HomeBanner() {
  return (
    <section className="container" id="home">
      <div className="row h-100">
        <div className="col-lg-6 ">
          <div className="home-content-area">
            <div className="">
              <h3>Hello, I am</h3>
              <h1 className="text-warning">Pranav Devkar</h1>
              <h3>Frontend Developer</h3>
            </div>
           
            <div className="d-flex home-btn-area">
              <button type="button" class="btn btn-outline-primary">
                Download Resume
              </button>
              <button type="button" class="btn btn-outline-warning ms-4">
                Hire Me
              </button>
            </div>

            <div className="d-flex my-5 justify-content-between home-skill-area">
              <img src="images/html.png" alt="HTML" />
              <img src="images/css.png" alt="CSS" />
              <img src="images/bootstrap.png" alt="Bootstrap" />
              <img src="images/nextJS.png" alt="nextJS" />
              {/* <img src="images/laravel.png" alt="Laravel" /> */}
            </div>
            
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <img src="images/home.png" alt="home img" />
        </div>
      </div>
    </section>
  );
}
