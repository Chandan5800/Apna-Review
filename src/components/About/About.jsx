import React from "react";
import Image from "../About/img7.jpg"
import Image1 from "../About/img8.avif"
import "./About.css";
import Base from "../Base";


const About = () => {
    return (
        <Base>
            

            <img src={Image} alt="About Us" style={{ opacity: 0.1 }} />

            <div className="text-overlay1 bg-transparent">
                <section className="vh-100">
                    <div className="container-fluid h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">

                                <img src={Image1}
                                    className="img-fluid opacity-100 " alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
                                <form >
                                    
                                        <h2 className="fw-bold">ABOUT US</h2><br />
                                    

                                    <h4 className="text-start">Welcome to our about page. Here, you can find information about our Services, company and what we do.</h4>

                                    <p>Our mission is to provide top-rated product and services review to our customer. We have been serving our clients for many years, and we are committed to excellence.</p>

                                    
                                    <a href="aboutmore"><button type="button" class="btn btn-primary  mb-4 ">Learn More</button></a>
                                    

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Base>
    );
};

export default About; 
