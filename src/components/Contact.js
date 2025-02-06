import { useState } from "react"
import emailjs from '@emailjs/browser';
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_7x3do7s', // Your EmailJS service ID
        'template_cur8x8f', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Namita', // Your name or recipient name
        },
        'uOFAR8Ayl5cCuswEH' // Your EmailJS public key
      );

      if (result.text === 'OK') {
        setStatus('Message sent successfully!');
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
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
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
        {status && <p className={status.includes('success') ? 'success-message' : 'error-message'}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
