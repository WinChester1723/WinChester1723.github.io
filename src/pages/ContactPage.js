import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <form data-aos="fade-right">
          <form action="https://formsubmit.co/pasha.pashazade.23@gmail.com" method="POST">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </form>
      </div>
      <div  className="contact-info" data-aos="fade-left">
        <h2>Reach Me</h2>
        <ul>
          <li>Email: <a href="mailto:pasha.pashazade.23@gmail.com">pasha.pashazade.23@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/pasha-pashazade-b81875146" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/WinChester1723" target="_blank" rel="noopener noreferrer">My GitHub Repositories</a></li>
          <li>Phone: +994 50 760 92 62</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;