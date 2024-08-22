import React, { useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import heroImage from './assets/prof.jpg';
import logo from './assets/logo.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="dark App font-sans transition-all duration-500">
      <header className="bg-primary text-textLight p-6 flex flex-col items-center justify-center relative">
        <img src={logo} alt="Logo" className="h-32 mb-6 animate-fade-in-up" />
        <nav className="flex justify-center space-x-8 text-xl font-semibold">
          <button 
            onClick={() => setActiveSection('home')} 
            className={`relative pb-2 ${activeSection === 'home' ? 'text-accent after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0' : 'hover:text-accent'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveSection('portfolio')} 
            className={`relative pb-2 ${activeSection === 'portfolio' ? 'text-accent after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0' : 'hover:text-accent'}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveSection('resume')} 
            className={`relative pb-2 ${activeSection === 'resume' ? 'text-accent after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0' : 'hover:text-accent'}`}
          >
            Resume
          </button>
          <button 
            onClick={() => setActiveSection('contact')} 
            className={`relative pb-2 ${activeSection === 'contact' ? 'text-accent after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-accent after:bottom-0 after:left-0' : 'hover:text-accent'}`}
          >
            Contact
          </button>
        </nav>
      </header>

      <main className="p-8 bg-primary text-textLight min-h-screen transition-colors duration-500">
        {activeSection === 'home' && (
          <div className="space-y-16 text-center animate-fade-in">
            <section className="relative flex flex-col md:flex-row items-center text-left md:text-left">
              <div className="w-full md:w-1/2 p-4">
                <img src={heroImage} alt="Hero" className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-2xl transform transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-4xl font-extrabold mt-8 md:mt-0">Hello, I'm Luke Youngs! 👋</h2>
                <p className="mt-6 text-lg leading-relaxed">
                  I'm an <strong>Electrical & Computer Engineering graduate</strong> with a passion for <strong>Machine Learning</strong>, <strong>Signal Processing</strong>, and <strong>Embedded Systems</strong>. I enjoy building innovative projects, working in teams, and learning new technologies. When I am not engineering, I can always be found at the nearest golf course :)
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold">🔧 Technologies & Tools</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left max-w-4xl mx-auto">
                <li className="p-4 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <strong>Programming Languages:</strong> Python, C, C++, Java, SQL
                </li>
                <li className="p-4 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <strong>Frameworks & Libraries:</strong> TensorFlow, PyTorch, SKLearn, Pandas, Numpy
                </li>
                <li className="p-4 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <strong>Other Tools:</strong> LDRA Tool Suite, MATLAB, MongoDB, Git
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-bold">🏆 Projects</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-left max-w-4xl mx-auto">
                <li className="flex items-start p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/ffffff/home.png" alt="House Icon" className="mr-6"/>
                  <div>
                    <a href="https://github.com/lukepyoungs/housing-price-predictor" className="text-xl text-accent font-semibold underline">Predicting Housing Prices</a>
                    <p className="text-lg mt-2">Developed a machine learning model with Gradient Boosting to achieve 90%+ accuracy.</p>
                  </div>
                </li>
                <li className="flex items-start p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png" alt="Airplane Icon" className="mr-6"/>
                  <div>
                    <a href="https://github.com/lukepyoungs/embedded-systems-project" className="text-xl text-accent font-semibold underline">Embedded Systems Project</a>
                    <p className="text-lg mt-2">Conducted static analysis code testing of avionic systems using LDRA Tool Suite.</p>
                  </div>
                </li>
                <li className="flex items-start p-6 bg-secondary rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/ffffff/golf.png" alt="Golf Icon" className="mr-6"/>
                  <div>
                    <a href="https://github.com/lukepyoungs/golf-stats-app" className="text-xl text-accent font-semibold underline">Golf Stats App</a>
                    <p className="text-lg mt-2">Developed a React app to calculate and track golf handicaps, integrating various statistics.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-3xl font-bold">⛳️ Fun fact about me</h3>
              <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
                Over the last 7 years, I have really enjoyed competing in golf. Throughout this time, I have developed a solid golf game, as well as many interpersonal skills. The golf course was a place where I found refuge during the pandemic, and the sport has been great for my mental health through the practice of mindfulness. I always love discussing anything golf, feel free to reach out!
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-bold">📫 Let's Connect!</h3>
              <div className="flex justify-center mt-4 space-x-6">
                <a href="https://www.linkedin.com/in/luke-youngs-285216198/" target="_blank" rel="noopener noreferrer" className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-dark transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
                </a>
                <a href="mailto:youlukep@gmail.com" className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-dark transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="Email" className="h-8 w-8" />
                </a>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <footer className="bg-secondary text-textDark p-4 text-center">
        <p>&copy; 2024 Luke Youngs. All Rights Reserved.</p>
        
      </footer>
    </div>
  );
}

export default App;
