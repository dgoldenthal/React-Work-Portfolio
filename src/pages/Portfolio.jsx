import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=400",
      description: "A zodiac sign web application", 
      deployedUrl: "https://caljames94.github.io/Zodiac-Insight-Finder/",
      githubUrl: "https://github.com/caljames94/Zodiac-Insight-Finder"
    },
    {
      title: "Project 2",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400",
      description: "A modern web application using APIs",
      deployedUrl: "https://weather-forecast-dashboard-4jc1.onrender.com/",
      githubUrl: "https://github.com/dgoldenthal/Weather-Forecast-Dashboard"
    },

  ];

  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#E6F3FF' }}> {/* Light Blue */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;