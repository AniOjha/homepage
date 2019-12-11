import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Anirudh's Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2  style={{display: 'flex', justifyContent: 'center'}}>About Me</h2>

            <p>
            Welcome to my humble website and thank you for your interest. I'm a 20-y/o biding my time in Kanpur before I come out and dominate the world :)
            <br />
            I have a deep appreciation for everything beautiful humans did and can create, with a special eye for literature, poetry, puns and stick figures. 
            Do let me know if there is something cool you would like to share with me.
            <br />
            I am that sporty kid who can't wait till it's 5 PM and time to go out and play. I love lawn tennis (Federer >>> everyone else), but would play just about everything except carrom which I maintain is an abomination of a game. Also, my knowledge of absolutely useless cricketing trivia is unbeatable and it'll take the rest of my life to forget it.
            <br />
            I am enthusiastic about technology and am exploring machine learning and its applications in vision and language tasks. In my fun time I like to debate, watch <a style={{color: "green"}} href="https://www.youtube.com/user/LastWeekTonight">John Oliver</a> or <a style={{color: "green"}} href="https://www.youtube.com/user/vlogbrothers">vlogbrothers</a>, scroll through <a style={{color: "green"}} href="http://explosm.net/">Cyanide and Happiness</a> or <a style={{color: "green"}} href="https://xkcd.com/">xkcd</a> archives and contemplate <a style={{color: "green"}} href="https://i.redd.it/q1p3vc7215341.jpg">existential nihilism</a> :))
            You can find me using the contacts below, although I'm likelier to be sleeping around somewhere in the CSE department (check KD ground floor lab and RM 4th floor in that order).
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Anirudh Anil Ojha</span><br />
						   <span>Room 250, Sexy Sexy Hall-3<br />
						         IIT Kanpur
                   </span><br />
						   <span>+91-9xxxxxxxxx</span><br />
                     <span>a a o j h a @ i i t k . a c . i n</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="files/upload_CV.pdf" className="button"><i className="fa fa-download"></i>Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
