import React from "react";

export default function Experience() {
  const experienceInfo = [
    {
      title: "Internship",
      data: [
        { title: "Job Role", data: "Intern Frontend Developer" },
        { title: "Company Name", data: "Neuromonk Infotech Pvt. Ltd" },
        { title: "Email", data: "pranav.devkar@neuromonk.com" },
        { title: "Duration", data: "01 Jan 2022 To 30 Jun 2022" },
      ],
    },
    {
      title: "On Role",
      data: [
        { title: "Job Role", data: "Frontend Developer" },
        { title: "Company Name", data: "Neuromonk Infotech Pvt. Ltd" },
        { title: "Email", data: "pranav.devkar@neuromonk.com" },
        { title: "Duration", data: "01 Jan 2022 To Till Date" },
      ],
    },
  ];

  return (
    <section className="container" id="experience">
      <div className="row h-100 d-flex align-items-center">
        <div className="col-lg-8 ">
          <div className="experience-content-area">
            <h1 className="text-warning">Experience</h1>

            <div className="">
              <div className="experience-info d-lg-flex justify-content-between">
                {experienceInfo.map((experience, index) => (
                  <div className="mb-5" key={index}>
                    <h4>{experience.title}</h4>
                    {experience.data.map((data, index) => (
                      <div key={index}>
                        <span className="text-danger">{data.title}</span>{" "}
                        <span className="text-primary">:</span>{" "}
                        <span>{data.data}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <img src="images/home.png" alt="experience img" />
        </div>
      </div>
    </section>
  );
}
