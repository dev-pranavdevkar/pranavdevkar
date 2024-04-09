import React from "react";

export default function Testimonial() {


    return (
        <section className="container" id="testimonial">
            <div className="testimonial-content-area">
                <div className="row h-100 d-flex align-items-center">
                    <div className="col-12 mb-5 text-center">
                        <h1 className="text-warning">Testimonial</h1>
                    </div>

                    <div className="col-lg-4">
                        <div class="card program-card">
                            <div className="card-header d-flex justify-content-end">
                                
                            <i class="fa fa-circle text-danger"></i>
                            <i class="fa fa-circle text-warning"></i>
                            <i class="fa fa-circle text-success"></i>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <div className="text-end">
                                    <h5 class="card-title text-warning">Pranav Devkar </h5>
                                    <h6 class="card-subtitle mb-2 ">CEO,Neuromonk Infotech</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
