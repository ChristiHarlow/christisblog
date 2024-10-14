import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Generate a mailto link for sending the email
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:christiharlow@outlook.com?subject=Message from ${formData.name}&body=Email: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoLink;

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
  <h2 className="contact-title">Contact Me</h2>
  <p className="contact-info">Feel free to reach out through the form below!</p>
  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
    </div>

    <button type="submit">Send Message</button>
  </form>
</div>

  );
}

export default Contact;
