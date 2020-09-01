import React from "react";
import "./CareerContent.css";

interface CareerContentProps {
  header?: string;
  content: string;
}

export const CareerContent = () => {
  return (
    <>
      <div className="career-content">
        <h1>Experience</h1>
        <div className="career-experiences">
          <div className="experience">
            <h2>Government Technology Agency Singapore</h2>
            <h2>MyCareersFuture</h2>
            <p>
              MCF is a jobs portal that aims to provide Singapore Citizens and
              Permanent Residents with a free job search service that matches
              them to relevant jobs based on the jobseeker’s skills.
            </p>
            <h3>Associate Software Engineer</h3>
            <h4>Jun 2020 - Present</h4>
            <h4>Technologies Used</h4>
            <ul>
              <li>React JS</li>
              <li>GoLang</li>
              <li>TypeScript</li>
            </ul>
            <h4>Work Done</h4>
            <ul>
              <li>Developing new API endpoints with GoLang</li>
            </ul>
          </div>
          <div className="experience">
            <h2>Ground Labs</h2>
            <p>
              Ground Labs enables organizations to discover and remediate all of
              their data across multiple types and locations — on servers, on
              desktops and in the cloud.
            </p>
            <h3>Software Engineer</h3>
            <h4>Jan 2015 - Jun 2020</h4>
            <h4>Technologies Used</h4>
            <ul>
              <li>C++ 11</li>
              <li>C++ 14</li>
              <li>Wt Widgets</li>
              <li>Python Scripting</li>
            </ul>
            <h4>Work Done</h4>
            <ul>
              <li>Worked on C++ Web application with Wt Widgets for the UI.</li>
              <li>
                Worked on proprietary programming language to generate patterns
                for PII and GDPR related patterns.
              </li>
              <li>
                Developed code for Cloud Storage API interaction with the
                software using REST API and OAuth technologies.
              </li>
              <li>
                Developed code in many aspects and parts of the software for the
                back end of Enterprise Recon and our engine.
              </li>
              <li>
                Worked with multi-platform systems e.g. Windows, Linux, Mac,
                Solaris
              </li>
              <li>
                Developed code for connections with different databases, e.g.
                MongoDB, MySQL, InterSystemsCache, MsSQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
