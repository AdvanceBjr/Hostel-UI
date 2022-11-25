import React from "react";
import "./Contact.css";
import { AiFillMail } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_lmxm12a",
      "template_oa3rys4",
      form.current,
      "ZQdKR_ciGmsXFn-DV"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      {/* <h5>Get in Touch</h5> */}
      <h2 className="head">Contact Us</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiFillMail className="icon1" />
            <h5 style={{ color: "rgb(11, 110, 143)" }}>Email</h5>
            <h6>anjali29062001abc@gmail.com</h6>
            <a
              className="ab"
              href="mailto:anjali29062001abc@gmail.com"
              target="_blank"
            >
              <h5>Send a message</h5>
            </a>
          </article>
          <article className="contact_option">
            <BsFillTelephoneOutboundFill className="icon1" />
            <h5 style={{ color: "rgb(11, 110, 143)" }}>Call Us</h5>
            <h6>+91-8888888888</h6>
          </article>
          <article className="contact_option">
            <IoIosTime className="icon1" />
            <h5 style={{ color: "rgb(11, 110, 143)" }}>Our Timings</h5>
            <h6>Mon-Sun : 10AM to 7AM</h6>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
