import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
    <section id="purtfolio">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}         
          date="Nov '19 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Deputy Contingent Leader</h3>
          <h4 className="vertical-timeline-element-subtitle">Cultural Meet 4.0, IIT Bombay</h4>
          <p>
            Managing finances, preparation and logistics related to the Inter-IIT Cultural Meet 4.0 to be held in IIT Bombay.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}          
          date="Sept-Oct '19"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Contingent Leader</h3>
          <h4 className="vertical-timeline-element-subtitle">Rendezvous '19, IIT Delhi</h4>
          <p>
            Managing finances, preparation and logistics for the clubs which participated in Rendezvous '19, 
            the annual cultural festival of IIT Delhi.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}          
          date="Apr-Oct '19"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Manager, Media and Publicity</h3>
          <h4 className="vertical-timeline-element-subtitle">Antaragni '19</h4>
          <p>
            Managed the media coverage of Antaragni '19.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}          
          date="May-July '19"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Research Fellow</h3>
          <h4 className="vertical-timeline-element-subtitle">Max Planck Institute for Software Systems, Kaiserslautern, Germany</h4>
          <p>
            Worked under Prof. Paul Francis on his project on data anonymisation algorithms that preserve analytic utility.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}          
          date="Apr '19 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Coordinator</h3>
          <h4 className="vertical-timeline-element-subtitle">English Literary Society</h4>
          <p>
            Planning and conducting activities related to English literature for the campus community.                              
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}          
          date="Apr-Oct '18"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Manager, English Literary Events</h3>
          <h4 className="vertical-timeline-element-subtitle">Antaragni '18</h4>
          <p>
            Conducted english literary competitions in Antaragni '18.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}          
          date="Jan-May '18"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          
        >
          <h3 className="vertical-timeline-element-title">Campus Winner</h3>
          <h4 className="vertical-timeline-element-subtitle">Microsoft code.fun.do '17</h4>
          <p>
            Created a web application to predict changing international bilateral relations using sentiment analysis of news.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        />
      </VerticalTimeline>
    </section>
    );
  }
}

export default Portfolio;
