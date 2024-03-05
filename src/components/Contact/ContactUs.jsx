import React from "react";
import Image from "../Contact/img2.jpg";
import "./Contact.css";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Base from "../Base";

const ContactUs = () => {

    const [isSuccess, setIsSuccess] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        user_email: '',
        message: '',
    });

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_7ni24fs", "template_9mujpzs", e.target, "yu5aLDVZup10X2_zQ")
            .then((res) => {
                console.log('SUCCESS!', res);
                setIsSuccess(true); // Set the success message
                setFormData({ name: '', user_email: '', message: '' }); // Clear form data
            })
            .catch((err) => {
                console.log(err);
                setIsSuccess(false); // Set an error message if needed
            });
    }
    return (
        <Base>

            <img src={Image} alt="Contact Us" style={{ opacity: 0.3, width: "100vw", height: "100vh" }} />

            <div className="text-overlay " >
                <h1>Contact Us</h1>
                {isSuccess === true ? (
                    <p className="success-message">Your message has been successfully submitted!</p>
                ) : (
                    <center>
                    <p>“We're here to help you, every step of the way". “We listen, we care, we deliver.”</p>
                    </center>
                )}
                {isSuccess === false && <p className="error-message">Oops! Something went wrong. Please try again later.</p>}

                <form className="form1" onSubmit={sendEmail}>
                    <div>
                        <label className="label1" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="input1"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="label1" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="input1"
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className="label1" htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>

                    <button className="but form-control btn-outline-primary bg-primary fw-bold m-auto" type="submit">Submit</button>
                </form>
            </div>

        </Base>
    );
};

export default ContactUs; 
