import React from "react";
import "./Contact.css";
import { AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import Location from "./Location";

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lmxm12a', 'template_oa3rys4', form.current, 'ZQdKR_ciGmsXFn-DV')
      e.target.reset();
  };
  return <>
  
    <section id="contact">
    
    <Location/>

      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiFillMail className="icon1"/>
            <h4>Email</h4>
            <h5>anjali29062001abc@gmail.com</h5>
            <a href="mailto:anjali29062001abc@gmail.com" target="_blank">Send a message</a>
          </article>
          {/* <article className="contact_option">
            <BsWhatsapp className="icon1"/>
            <h4>WhatsApp</h4>
            <h5>+918084257276</h5>
            <a href="https://wa.me/+918084257276" target="_blank">
              Send a message
            </a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" id="" cols="30" rows="7" placeholder="Your message" required/>
           <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
    </>
};

export default Contact;
