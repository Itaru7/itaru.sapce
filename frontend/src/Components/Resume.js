import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            {work.positions.map((position, i) => {
              var r = []
              r.push(<p key={position}></p>)
              r.push(<span key={i} className="info">{position.title}</span>)
                {position.years &&
                    r.push(<span><span>&bull;</span> <em className="date">{position.years}</em></span>)
                }
              position.description.map((description, j) => r.push(<p className="detail" key={description}>{description}</p>));
              return r
            })}
            <p></p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      var certificates = this.props.data.certificates.map(function(certificate){
        var certificateImage = 'images/certificates/'+certificate.image;
        return <div key={certificate.title} className="columns feature-item">
          <a href={certificate.url}>
            <img className="certificate" alt={certificate.title} src={certificateImage}></img>
          </a>
          <h5>{certificate.title}</h5>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
              </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

				    <div className="bars">
				      <ul className="skills">
                {skills}
              </ul>
				    </div>  
			    </div>
        </div>

        <div className="row certificate">
        <div className="three columns header-col">
            <h1><span>Certificates</span></h1>
          </div>

          <ul className="bgrid-quarters s-bgrid-thirds cf">
            {certificates}
          </ul>
        </div>

      </section>
    );
  }
}

export default Resume;
