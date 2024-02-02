import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faNodeJs,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a passionate front-end web developer who's looking for a role
            in an established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
          I have a vast experience and knowledge in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I also love to collaborate with my colleagues to
           create efficient, scalable, and user-friendly websites.
          </p>
          <p>
            I'm also a fresh graduate with a degree in Computer Engineering.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#365486" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#365486" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#365486" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#365486" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#365486" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#365486" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple" />
    </>
  )
}

export default About