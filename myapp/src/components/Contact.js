import React from "react";

export const Contact = () => {
  const [state] = React.useState({});
  return (
    <div className="contact">
      <div className="container">
        <div className="main__header">
          <div className="common">
            <h3 className="heading">CONTACT</h3>
            <h1 className="mainHeader">My contact</h1>
            <p className="mainContent">
              Send me an email if you want to contact me
            </p>
            <div className="commonBorder"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="banner__img">
              <img src="images/conection.png" alt="dev" />
            </div>
          </div>
          <div className="col-6">
            <div className="header__content">
              <div className="header__contact">
                <div className="left-content">
                  <div className="contact-title">
                    <h4>Get In Touch</h4>
                  </div>
                  <form className="form">
                    <div className="form-field">
                      <label htmlFor="name">Enter your name*</label>
                      <input
                        type="text"
                        id="name"
                        class="field"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Enter your email*</label>
                      <input
                        type="email"
                        id="email"
                        class="field"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="text-area">Enter your Message*</label>
                      <textarea
                        placeholder="Insert your Message here :)"
                        class="field"
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="form-field">
                      <button className="btn">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
