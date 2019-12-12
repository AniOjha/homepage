import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li>
            <blockquote>
               <p>..it's hard to stay mad, when there's so much beauty in the world. Sometimes I feel like I'm seeing it all at once, and it's too much, my heart fills up like a balloon that's about to burst... And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain and I can't feel anything but gratitude for every single moment of my stupid little life... You have no idea what I'm talking about, I'm sure. But don't worry... you will someday.</p>
               <cite>American Beauty</cite>
            </blockquote>
            <blockquote>
               <p>Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.</p>
               <cite>Micheal Scott</cite>
            </blockquote>            
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="bg-image"></div>
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                    <li>
                      <blockquote>
                         <p>..it's hard to stay mad, when there's so much beauty in the world. Sometimes I feel like I'm seeing it all at once, and it's too much, my heart fills up like a balloon that's about to burst... And then I remember to relax, and stop trying to hold on to it, and then it flows through me like rain and I can't feel anything but gratitude for every single moment of my stupid little life... You have no idea what I'm talking about, I'm sure. But don't worry... you will someday.</p>
                         <cite>American Beauty</cite>
                      </blockquote>
                      <blockquote>
                         <p>Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.</p>
                         <cite>Micheal Scott</cite>
                      </blockquote>            
                  </li>
                 </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
