import React from 'react';

const Resume = () => {
  return (
    <div className="p-8 min-h-screen" style={{ backgroundColor: '#FFE6CC' }}>
      <div className="max-w-4xl mx-auto">
        {/* Resume title */}
        <h2 className="text-3xl font-bold">Resume</h2>
        
        {/* Download button with correct path */}
        <div className="mt-4 mb-12">
          <a
            href="/assets/resume/MyCV.pdf"  // Updated path to match your file structure
            download="MyCV.pdf"  // This will be the downloaded file name
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>

        {/* Rest of your component remains the same */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;