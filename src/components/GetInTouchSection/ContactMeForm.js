import React, { Component } from "react";

import "./GetInTouchSection.scss";

class ContactMeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }


  encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Your message has been sent successfully"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="send-message-section">
        <h4 className="subtitle has-text-dark-theme has-text-weight-semibold margin-bottom-1">Send a message instead</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="field margin-bottom-1">
            <label className="label is-hidden">Name</label>
            <div className="control">
              <input required className="input is-medium" type="text" placeholder="Your Name" name="name" value={name} onChange={this.handleChange} />
            </div>
          </div>
          <div className="field margin-bottom-1">
            <label className="label is-hidden">Email</label>
            <div className="control">
              <input required className="input is-medium" type="email" placeholder="Your Email ID" name="email" value={email} onChange={this.handleChange} />
            </div>
          </div>
          <div className="field margin-bottom-1">
            <label className="label is-hidden">Message</label>
            <div className="control">
              <textarea required rows="5" className="textarea is-medium" placeholder="Your message here..." name="message" value={message} onChange={this.handleChange}></textarea>
            </div>
          </div>
          <div data-netlify-recaptcha="true" />
          <div className="control">
            <button className="button is-primary is-medium" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactMeForm;
