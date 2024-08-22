import React from 'react';

const projects = [
  {
    title: 'Predicting Housing Prices',
    description: 'Developed a machine learning model with Gradient Boosting to achieve 90%+ accuracy.',
    link: 'https://github.com/lukepyoungs/housing-price-predictor',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/home.png',
  },
  {
    title: 'Embedded Systems Project',
    description: 'Conducted static analysis code testing of avionic systems using LDRA Tool Suite.',
    link: 'https://github.com/lukepyoungs/embedded-systems-project',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/airplane-take-off.png',
  },
  {
    title: 'Golf Stats App',
    description: 'Developed a React app to calculate and track golf handicaps, integrating various statistics.',
    link: 'https://github.com/lukepyoungs/golf-stats-app',
    icon: 'https://img.icons8.com/ios-filled/50/ffffff/golf.png',
  },
];

function Portfolio() {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-center bg-secondary p-6 rounded-lg shadow-lg">
            <img src={project.icon} alt={`${project.title} Icon`} className="mr-4"/>
            <div className="text-left">
              <a href={project.link} className="text-xl text-blue-500 font-semibold underline">{project.title}</a>
              <p className="text-lg text-textLight mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
