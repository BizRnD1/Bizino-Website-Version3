import React from "react";
import offering from "./data-offerings";
import powered from "./poweredby";
import industries from "./industries";

const Offerings = () => {
  return (
    <section className='innovative offering-section' id='do'>
      <section className='section-center clearfix'>
        <section id='services'></section>
        <br />
        <h1 className='section-title'>Services</h1>
        
        <h3 className='offering-subtitle clearfix' id="one">
          Bizino Digital Offerings for Data-centric, Advanced Analytics and
          AI-powered Digital Business, and Operating Models
        </h3>
        {offering.map((offer) => {
          return <p className='offering-text'>{offer.title}</p>;
        })}
        ;
        <h4 className='offering-subtitle clearfix'>
          <br></br>
          <br></br>Powered by...
        </h4>
        {powered.map((power) => {
          return <p className='offering-text powered-by-text'>{power.label}</p>;
        })}
      </section>

      <section className='section-center clearfix'>
        <section id='industries'></section>
        <br />
        <h1 className='section-title clearfix' id="two">
          {/* <br /> */}
          Industries
        </h1>
        ;
        {industries.map((industry) => {
          return (
            <p className='offering-text' id={industry.url}>
              {industry.title}
            </p>
          );
        })}
      </section>
    </section>
  );
};

export default Offerings;

/*  return (
      <section className="innovative">
        <section className='section-offerings'>
          {offerings.map((offering) => {
            return (
              <section className='clearfix'>
                <h1 className='section-title'>{offering.title}</h1>
                <article className='offering-box'>
                  {offering.subtitles.map((subtitle) => {
                    return <p className='offering-text'>{subtitle.label}</p>;
                  })}
                </article>
                <br></br>
              </section>

              {
               offering.subtitles.map((subtitle)=>{
                return(
                  <p>{subtitle.label}</p>
                );
              })} 
            );
          })}
        </section>
      </section>
    ); */
