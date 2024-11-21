import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: "/api/placeholder/400/300",
      description: "A full-stack application built with React and Node.js",
      deployedUrl: "https://project1.demo",
      githubUrl: "https://github.com/username/project1"
    },
    {
      title: "Project 2",
      image: "/api/placeholder/400/300",
      description: "A modern web application using React and APIs",
      deployedUrl: "https://project2.demo",
      githubUrl: "https://github.com/username/project2"
    },
    // Add more projects here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;