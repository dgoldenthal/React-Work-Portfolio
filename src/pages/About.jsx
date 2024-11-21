import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/api/placeholder/300/300"
          alt="Developer"
          className="rounded-full w-64 h-64 object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm John Developer. I'm a full-stack web developer passionate about
            creating elegant solutions to complex problems. With expertise in React,
            Node.js, and modern web technologies, I build scalable and user-friendly
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;