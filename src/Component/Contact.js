import React, { useState } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import "../Css/App.css";
import "../Css/Contact.css";

const Contact = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  // form input value
  const [inputValue, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  // get input value function
  const getInputValue = (e) => {
    setInputValue(() => {
      return {
        ...inputValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  // submit form function
  const submitForm = (e) => {
    e.preventDefault();
    if (
      inputValue.fName !== "" &&
      inputValue.lName !== "" &&
      inputValue.email !== "" &&
      inputValue.message !== ""
    ) {
      alert("The message is sent to us. Thank you for contacting.");
      setInputValue({
        fName: "",
        lName: "",
        email: "",
        message: "",
      });
    } else {
      alert("Please fill the form properly.");
    }
  };

  return (
    <>
      {/* main section */}
      <div className="main__section">
        {/* contact header */}
        <div className="contact__header">
          <h1>Contact Us</h1>
          <p>Feel free to contact with us. We are here to help you.</p>
        </div>

        {/* contact__section */}
        <div className="contact__section">
          {/* left contact section */}
          <div className="left__contact__section" data-aos="fade-right">
            <h1>Customers</h1>
            <p>
              For recommendations, comments or enquiry, feel free to contact us
              and we will reply to you as soon as we can.
            </p>
            <h1>Influencers</h1>
            <p>
              So excited! Email us with your media kit, website or any other
              information you would like to share with us. We will be sure to
              respond as soon as we can.
            </p>
          </div>
          {/* right contact section */}
          <form
            className="right__contact__section"
            data-aos="fade-left"
            onSubmit={submitForm}
          >
            <input
              onChange={getInputValue}
              name="fName"
              type="text"
              placeholder="First Name"
              value={inputValue.fName}
            />
            <input
              onChange={getInputValue}
              name="lName"
              type="text"
              placeholder="Last Name"
              value={inputValue.lName}
            />
            <input
              onChange={getInputValue}
              name="email"
              type="email"
              placeholder="Email"
              value={inputValue.email}
            />
            <textarea
              onChange={getInputValue}
              name="message"
              rows="3"
              placeholder="Message"
              value={inputValue.message}
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      {/* footer */}
      <p className="footer">CopyRight © 2021 eBeauty.</p>
    </>
  );
};

export default Contact;
