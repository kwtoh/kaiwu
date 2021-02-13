import React from 'react'
import {ResumeCard} from './ResumeCard'
import './Resume.css'


export default function Resume() {
  return (
    <div className="resume-grid">
       <ResumeCard company="Ground Labs" companyLink="https://www.groundlabs.com/" dateFrom='2014-05-01' jobTitle="Software Engineer Intern" jobDesc={['Developed cloud input streams for the engine', 'Created UI Elements using Wt Framework']} languages={['C++', 'CSS', 'HTML', 'SVN', 'Jenkins', 'JIRA']}/>
       <ResumeCard dateFrom='2015-01-01' jobTitle="Software Engineer" jobDesc={['Led development efforts for multiple cloud input streams for the engine', 'Created Multiple UI Elements using Wt Framework', 'Assisted in the creation of numerous logic to detect sensitive data']} languages={['C++','MySQL', 'CSS', 'HTML', 'Git', 'Jenkins', 'JIRA', 'MongoDB']}/>
       <ResumeCard company="GovTech" companyLink="https://www.tech.gov.sg/" dateFrom='2020-06-01' jobTitle="Software Engineer" languages={['React', 'GoLang', 'Node', 'GitLab', 'Git', 'MySQL', 'Selenium Testing Framework', 'Docker', 'Kubernetes']} />
    </div>
  )
}
