import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Bootcamp website.PNG'
import IMG2 from '../../assets/vawulens.PNG'
import IMG3 from '../../assets/Music-player.PNG'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Simple frontend bootcamp website with html and css',
    github: 'https://github.com/ifykenchi/Frontend-Bootcamp',
    demo: 'http://bootcamp.ifykenchi.com.ng'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ReactJS gym website',
    github: 'https://github.com/ifykenchi/gym-website-react',
    demo: 'http://vawulens.ifykenchi.com.ng'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Simple Music player using vanilla javascript',
    github: 'https://github.com/ifykenchi/JS-Music-Player',
    demo: 'https://music-player.ifykenchi.com.ng/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img className='projects' src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio