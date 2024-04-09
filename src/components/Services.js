import React from "react";

export default function Services() {
  const serviceInfo = [
    {
      title: "Web Development",
      desc: "Building custom websites that fit your needs and goals.",
    },
    {
      title: "Admin Web",
      desc: "Creating easy-to-use tools for managing your website's content and features.",
    },
    {
      title: "Responsive Web",
      desc: " Making sure your website looks great and works well on all devices, from phones to computers.",
    },
    {
      title: "SEO",
      desc: "Helping your website show up higher in Google searches so more people can find you online.",
    },
  ];

  return (
    <section className="container" id="services">
      <div className="service-content-area">
        <div className="row h-100 d-flex align-items-center">
          <div className="col-12 mb-5 text-center">
            <h1 className="text-warning">Services</h1>
          </div>
          {serviceInfo.map((service, index) => (
            <div className="col-lg-3" key={index}>
            <div className="mb-5" >
              <h4 className="text-danger">{service.title}</h4>
              <p>{service.desc}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
