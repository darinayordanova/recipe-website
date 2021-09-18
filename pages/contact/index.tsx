import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validForm, setValidForm] = useState(false);

  const sendMessage = () => {
    //ToDo
    //send the MSG here

    console.log("name", name);
    console.log("email", email);
    console.log("message", message);

    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      name.length > 2 &&
      re.test(String(email).toLowerCase()) &&
      message.length > 10
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [name, email, message]);

  return (
    <>
      <MainHeader />

      <main className="bg-dark-bige contact-page">
        <img
          className="side-img remove-on-mobile remove-on-tablet"
          src="./Mask Group (2).png"
        />
        <div className="container">
          <div className="row">
            <div className="contact-form col-sm-12 col-md-12 col-lg-5">
              <h2 className="mb-16">Contact me to say ‘Hi’</h2>
              <p className="mb-40px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                potenti imperdiet cursus consequat cursus
              </p>
              <form className="row mb-40" id="contact-form">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  
                </div>
              </form>
              <button
                disabled={!validForm}
                className="main-btn mt-40px"
                onClick={() => validForm && sendMessage()}
                type="submit" form="contact-form"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        <img
          className="remove-on-desctop full-width d-block mt-40px"
          src="./Mask Group (2).png"
        />
      </main>
      <Footer />
    </>
  );
}
