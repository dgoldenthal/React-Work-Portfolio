import React from 'react';

const About = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#E6E6FA' }}> {/* Light Purple */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, My Name is Dov. I'm passionate about creating elegant solutions to complex problems. 
          With expertise in React, Node.js, and modern web technologies, I build scalable and 
          user-friendly applications.
        </p>
      </div>
    </div>
  );
};

export default About;