import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Designs for your User Interface</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>REACT Native Solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Light Websites made using html, cc and bootstrep</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>No Content for your Website? No problem.
                <br />
                Custom content for better promotion of your site.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HD pictures for your site</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Audios and animated content can be added</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services