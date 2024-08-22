import React from 'react';

function Contact() {
  return (
    <div className="p-8 bg-primary text-textLight min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="bg-secondary p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <p className="text-lg mb-6">I'd love to connect with you! You can reach me via LinkedIn or email.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/luke-youngs-285216198/" target="_blank" rel="noopener noreferrer" className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-dark transition-colors duration-300">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="mailto:youlukep@gmail.com" className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-dark transition-colors duration-300">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="Email" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
