import config from "@config/config.json";
import Banner from "./components/Banner";
import React, { useState } from "react";
import ImageFallback from "./components/ImageFallback";





const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;


  const [query, setQuery] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/439fcbe8-2c70-4839-9367-cdaa71c5dcee", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "",subject:"", message: "" }));
    alert("Email Sent")
  };
  



  return (
    <section className="section">
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <form
              method="POST"/* 
              action={config.params.contact_form_action} */
              onSubmit={formSubmit}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                  value={query.name}
                  onChange={handleParam()}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                  value={query.email}
                  onChange={handleParam()}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  required
                  value={query.subject}
                  onChange={handleParam()}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea  
                  className="form-textarea w-full" rows="6"
                  name="message"
                  type="text"
                  required
                  value={query.message}
                  onChange={handleParam()}
                  />
              </div>
              <button type="submit" className="btn btn-primary block w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


