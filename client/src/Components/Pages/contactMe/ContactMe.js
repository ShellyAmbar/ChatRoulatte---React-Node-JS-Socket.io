import React, {useEffect, useRef, useState} from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import ScrollAnimations from "../../Customs/ScrollAnimations";

const ContactMe = () => {
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  useEffect(() => {
    setaddress("Avivim 12, Ramat Gan");
    setphone("0536200540");
    setemail("ambarshely@gmail.com");
    return ScrollAnimations();
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4s7l24j",
        "template_l4gm2a8",
        form.current,
        "user_0qJsFgVNpdOzp1jT8wIFp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="ContactMe" className="contact-container">
      <div className="contact-wrap">
        <div className="contact-in slide-in from-left">
          <h1>Info</h1>
          <h2>
            Phone <i class="fas fa-phone"></i>
          </h2>
          <p>{phone}</p>
          <h2>
            Email <i class="far fa-envelope"></i>
          </h2>
          <p>{email}</p>
          <h2>
            Address <i class="fas fa-map-marker-alt"></i>
          </h2>
          <p>{address}</p>
        </div>
        <div className="contact-in ">
          <h1>Send a Message</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              name="from_name"
              type="text"
              placeholder="Full Name"
              className="contact-in-input"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="contact-in-input"
            />
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="contact-in-input"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contact-in-textarea"
            ></textarea>
            <input type="submit" value="SUBMIT" className="contact-in-btn" />
          </form>
        </div>
        <div className="contact-in slide-in from-right">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.155891632832!2d34.816424320299596!3d32.092072181276386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bd2405accab%3A0xef4c103fc3626b55!2z15DXkdeZ15HXmdedIDEyLCDXqNee16og15LXnw!5e0!3m2!1siw!2sil!4v1633894584416!5m2!1siw!2sil"
            width="100%"
            height="auto"
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
