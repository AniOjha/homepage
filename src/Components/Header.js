import React, { Component } from 'react';
import Typed from 'react-typed';

class Header extends Component {
  render() {
    var myQuotes=[
      'Happiness is not enough for me. I demand euphoria!',
      'Better remain silent and be thought stupid than speak and remove all doubt.',
      'Wubba lubba dub dub!',
      'Bears. Beets. Battlestar Galactica.',
      'Sometimes I\'ll start a sentence and I don\'t even know where it\'s',
    ];
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	       <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home" color="#fff">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#about">Resume</a></li>
            <li><a className="smoothscroll" href="#purtfolio">Timeline</a></li>
            <li><a className="smoothscroll" href="#testimonials">Blog</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
      <div className="left-bar">
        <ul className="drop-down-home">
          <li>A</li>
        </ul> 
      </div>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Anirudh Anil Ojha.</h1>                       
            <h3>
              <Typed
                  strings={myQuotes}
                  typeSpeed={30}
                  shuffle={true}
                  loop={true}
              />
            </h3>
            <hr />

         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
