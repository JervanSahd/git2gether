import React from 'react';
import Maria from '../assets/team/maria.jpg';
import Autumn from '../assets/team/autumn.jpg';
import Barry from '../assets/team/barry.jpg';
import Steve from '../assets/team/steve.jpeg';
import Seamona from '../assets/team/seamona.jpg';


// importing icons for contact links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
const LinkedIn = <FontAwesomeIcon icon={faLinkedin} />
const Repo = <FontAwesomeIcon icon={faGithub} />
const Github = <FontAwesomeIcon icon={faGithubSquare} />
const Email = <FontAwesomeIcon icon={faEnvelopeSquare} />

function About() {
  return (
    <section class="about">
      <div class="about-section">
        <h2>Git2gether exists to connect, equip, and empower coding bootcamp graduates.</h2>
        <div id="breakLine"></div>
        <p>
          Coding bootcamps are a viable career path for aspiring developers.  Graduates of these fast-paced, intensive courses become proficient in variety of essential technologies and skills to help the graduate become employer-ready.
        </p>
        <br></br>
        <p>
          Upon graduation, many of these very developers are left wondering, “Now what?”  Finding work in this sector proves to be a challenge for many graduates.  Though, as many as 79% of bootcamp graduates say that they landed a job within six months of graduation.
        </p>
        <br></br>
        <p>
          Opportunity is out there, and we want to help developers to find it.  We aim to accomplish this by providing a digital platform to a&#41; locate b&#41; &/or create networking events to meet other bootcamp graduates.
        </p>
      </div>

      <div class="about-section">
        <div id='eventDate'>
          <h2 id='tech'>The Tech Behind Git2gether</h2>
          <div id='planner2'>
            <a href="https://github.com/JervanSahd/git2gether" target="_blank" id="repolink">Github Repository</a>
            <a href="https://github.com/JervanSahd/git2gether" target="_blank" id="repoIcon">{Repo}</a>
          </div>
        </div>
        <div id="breakLine"></div>
        <p>
          Git2gether is a student project completed as part of a full-stack coding bootcamp.
        </p>
        <br></br>
        <p>
          This full-stack MERN application includes the following technologies: React JS, GraphQL, Apollo Server-Express, Apollo/Client, Mongoose, Express, React-Google-Maps (NPM Package), and font-awesome icons (NPM Package).
        </p>
      </div>

      <div class="about-section">
        <h2>Meet Our Team</h2>
        <div id="breakLine"></div>

        {/* Team Members */}
        <div class="team-container">
          {/* Maria */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Maria} />
            </div>
            <div class="team-member-info-box">
              <h4 id="nameplate">Maria Brown</h4>
              <div id="breakLine"></div>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/maria-quintanilla-brown/" id="icons" target="_blank">{LinkedIn}</a>
                <a href="https://github.com/MariaEBrown" target="_blank" id="icons">{Github}</a>
                <a href="mailto:mariabrown0908@gmail.com" target="_blank" id="icons">{Email}</a>
              </div>
            </div>
          </div>

          {/* Autumn */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Autumn} />
            </div>
            <div class="team-member-info-box">
              <h4 id="nameplate">Autumn Fields</h4>
              <div id="breakLine"></div>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/autumn-fields-2021/" target="_blank" id="icons">{LinkedIn}</a>
                <a href="https://github.com/autumnlf" target="_blank" id="icons" >{Github}</a>
                <a href="mailto:autumnF12@gmail.com" target="_blank" id="icons" >{Email}</a>
              </div>
            </div>
          </div>

          {/* Barry */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Barry} />
            </div>
            <div class="team-member-info-box">
              <h4 id="nameplate">Barry Gilreath</h4>
              <div id="breakLine"></div>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/barry-gilreath-iii/" target="_blank" id="icons" >{LinkedIn}</a>
                <a href="http://www.github.com/barrygilreath3" target="_blank" id="icons" >{Github}</a>
                <a href="mailto:barrygilreath3@gmail.com" target="_blank" id="icons" >{Email}</a>
              </div>
            </div>
          </div>

          {/* Steve */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Steve} />
            </div>
            <div class="team-member-info-box">
              <h4 id="nameplate">Steve Snavely</h4>
              <div id="breakLine"></div>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/stevesnavely/" target="_blank" id="icons" >{LinkedIn}</a>
                <a href="https://github.com/JervanSahd/" target="_blank" id="icons" >{Github}</a>
                <a href="mailto:info@stevesnavely.com" target="_blank" id="icons" >{Email}</a>
              </div>
            </div>
          </div>

          {/* Seamona */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Seamona} />
            </div>
            <div class="team-member-info-box">
              <h4 id="nameplate">Seamona Stewart</h4>
              <div id="breakLine"></div>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/seamonajassystewart-aba25320/" target="_blank" id="icons">{LinkedIn}</a>
                <a href="https://github.com/Jaspertena" target="_blank" id="icons">{Github}</a>
                <a href="mailto:Jaspertena@aol.com" target="_blank" id="icons">{Email}</a>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}

export default About;