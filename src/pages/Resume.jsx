import React from 'react';

const Resume = () => {
  const skills = {
    frontend: [
      'HTML5', 'CSS3', 'JavaScript', 'React.js',
      'Responsive Design', 'Tailwind CSS', 'Bootstrap'
    ],
    backend: [
      'Node.js', 'Express.js', 'RESTful APIs',
      'MongoDB', 'MySQL', 'GraphQL'
    ],
    tools: [
      'Git', 'GitHub', 'VS Code', 'npm',
      'Webpack', 'Chrome DevTools', 'Postman'
    ],
    softSkills: [
      'Problem Solving', 'Team Collaboration',
      'Communication', 'Time Management'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Resume</h2>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {skills.frontend.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {skills.backend.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Development Tools</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {skills.tools.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">Soft Skills</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {skills.softSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="font-semibold">Full Stack Web Development Certificate</h4>
              <p className="text-gray-600">Your University/Bootcamp Name</p>
              <p className="text-gray-500">Graduation Date: 2024</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;