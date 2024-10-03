import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1 data-aos="fade-up">My Projects</h1>
      <ul className="projects-list">
        <li className="project-item" data-aos="fade-right">
          <h3>ElasticSearch Demo</h3>
          <p>Demonstration of using ElasticSearch in a real-world project.</p>
          <a href="https://github.com/WinChester1723/DemoElasticSearch" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li className="project-item" data-aos="fade-right">
          <h3>BookStore SOAP Demo</h3>
          <p>A demo of a SOAP-based web service for a book store.</p>
          <a href="https://github.com/WinChester1723/demoBookStoreSOAP" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li className="project-item" data-aos="fade-right">
          <h3>Fitness Tracker Demo</h3>
          <p>A fitness tracker app with step tracking and detailed API integration.</p>
          <a href="https://github.com/WinChester1723/demoFitnessTracker" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li className="project-item" data-aos="fade-right">
          <h3>Ocelot Demo</h3>
          <p>Implementation of API Gateway using Ocelot for routing and aggregation of requests.</p>
          <a href="https://github.com/WinChester1723/OcelotDemo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li className="project-item" data-aos="fade-right">
          <h3>Stripe Integration Demo</h3>
          <p>Integration of Stripe payment system for processing payments in ASP.NET Core applications.</p>
          <a href="https://github.com/WinChester1723/stripe-demo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li className="project-item" data-aos="fade-right">
          <h3>Service Bus Demo</h3>
          <p>Demonstration of Azure Service Bus for messaging between microservices.</p>
          <a href="https://github.com/WinChester1723/service-bus-demo" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;