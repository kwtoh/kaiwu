import React from 'react'
import "./ResumeCard.css";
import moment from 'moment'

export interface IResumeCardProps {
  dateFrom?: string,
  company?: string,
  jobTitle?: string,
  jobDesc?: Array<string>,
  companyLink?: string,
  languages?: Array<string>,
}

export const ResumeCard = ({dateFrom, companyLink, company, jobTitle, jobDesc, languages}: IResumeCardProps) => {
  const dateFromStr = moment(dateFrom).format('MMM YYYY')

  const descriptions = jobDesc?.map((desc) => {
    return <li>{desc}</li>
  })

  const langs = languages?.map((lang) => {
    return <li>{lang}</li>
  })

  return (
    <div className="timeline">
      {company ? <div className="container left">
        <div className="content company">
          <h3><a href={companyLink}>{company}</a></h3>
        </div>
      </div>: <div></div>}
      <div className="container right">
        <div className="content">
          <h3 className="pl4">{dateFromStr} - {jobTitle}</h3>
          {jobDesc ? <div>
            <h4 className="pl4">Job Scope</h4>
            <ul>{descriptions}</ul>
          </div> : <div></div>}
          {langs ? <div>
            <h4 className="pl4">Technologies Worked with</h4>
            <ul>{langs}</ul>
          </div> : <div></div>}
        </div>
      </div>
    </div>
  )
}
