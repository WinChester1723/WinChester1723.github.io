import React from "react";
import az204 from '../assets/images/az-204.pdf';
import az900 from '../assets/images/az-900.pdf';
import az400 from '../assets/images/az-400.pdf';

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h1>Certificates</h1>
      <ul>
        <li>
          <a href={az204} target="_blank" rel="noopener noreferrer">
            Microsoft Certified: Azure Developer Associate (AZ-204)
          </a>
          <p>Earned on April 7, 2024. Expires on April 8, 2025.</p>
        </li>
        <li>
          <a href={az900} target="_blank" rel="noopener noreferrer">
            Microsoft Certified: Azure Fundamentals (AZ-900)
          </a>
          <p>Earned on June 28, 2023.</p>
        </li>
        <li>
          <a href={az400} target="_blank" rel="noopener noreferrer">
            Microsoft Certified: DevOps Engineer Expert (AZ-400)
          </a>
          <p>Earned on May 2024.</p>
        </li>
      </ul>
    </div>
  );
};

export default Certificates;