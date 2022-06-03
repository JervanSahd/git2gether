import React from 'react';
import Maria from '../assets/team/maria.jpg';
import Autumn from '../assets/team/autumn.jpg';
import Barry from '../assets/team/barry.jpg';
import Steve from '../assets/team/steve.jpeg';
import Seamona from '../assets/team/seamona.jpg'

function About() {
  return (
    <section>
      <div class="about-section">
        <h2>Git2gether exists to connect, equip, and empower coding bootcamp graduates.</h2>
        <p>
          Coding bootcamps are a viable career path for aspiring developers.  Graduates of these fast-paced, intensive courses become proficient in variety of essential technologies and skills to help the graduate become employer-ready.
        </p>
        <p>
          Upon graduation, many of these very developers are left wondering, “Now what?”  Finding work in this sector proves to be a challenge for many graduates.  Though, as many as 79% of bootcamp graduates say that they landed a job within six months of graduation.
        </p>
        <p>
          Opportunity is out there, and we want to help developers to find it.  We aim to accomplish this by providing a digital platform to a&#41; locate b&#41; &/or create networking events to meet other bootcamp graduates.
        </p>
      </div>

      <div class="about-section">
        <div>
          <h2>The Tech Behind Git2gether</h2>
        </div>
        <p>
          Git2gether is a student project completed as part of a full-stack coding bootcamp.
        </p>
        <p>
          This full-stack MERN application includes the following technologies: React JS, GraphQL, Apollo Server-Express, Apollo/Client, Mongoose, Express, and React-Google-Maps (NPM Package).
        </p>
      </div>

      <div class="about-section">
        <h2>Meet Our Team</h2>

        {/* Team Members */}
        <div class="team-container">

          {/* Maria */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Maria}/>
            </div>
            <div class="team-member-info-box">
              <h3 id="nameplate">Maria Brown</h3>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/maria-quintanilla-brown/" target="_blank">Linkedin</a>
                <a href="https://github.com/MariaEBrown" target="_blank">GitHub</a>
                <a href="mailto:mariabrown0908@gmail.com" target="_blank">Contact</a>

                {/* Below is the code for the icons.  I was having trouble getting these icons to still appear on the screen when wrapping the <i> elements with an <a> element */}
                {/* <i class="fa-brands fa-linkedin fa-xl"></i> */}
                {/* <i class="fa-brands fa-github-square fa-xl"></i> */}
                {/* <i class="fa-solid fa-square-envelope fa-xl"></i> */}
              </div>
            </div>
          </div>

          {/* Autumn */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Autumn}/>
            </div>
            <div class="team-member-info-box">
              <h3 id="nameplate">Autumn Fields</h3>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/autumn-fields-2021/" target="_blank">Linkedin</a>
                <a href="https://github.com/autumnlf" target="_blank">GitHub</a>
                <a href="mailto:autumnF12@gmail.com" target="_blank">Contact</a>

                {/* Below is the code for the icons.  I was having trouble getting these icons to still appear on the screen when wrapping the <i> elements with an <a> element */}
                {/* <i class="fa-brands fa-linkedin fa-xl"></i> */}
                {/* <i class="fa-brands fa-github-square fa-xl"></i> */}
                {/* <i class="fa-solid fa-square-envelope fa-xl"></i> */}
              </div>
            </div>
          </div>

          {/* Barry */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Barry}/>
            </div>
            <div class="team-member-info-box">
              <h3 id="nameplate">Barry Gilreath</h3>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/barry-gilreath-iii/" target="_blank">Linkedin</a>
                <a href="http://www.github.com/barrygilreath3" target="_blank">GitHub</a>
                <a href="mailto:barrygilreath3@gmail.com" target="_blank">Contact</a>

                {/* Below is the code for the icons.  I was having trouble getting these icons to still appear on the screen when wrapping the <i> elements with an <a> element */}
                {/* <i class="fa-brands fa-linkedin fa-xl"></i> */}
                {/* <i class="fa-brands fa-github-square fa-xl"></i> */}
                {/* <i class="fa-solid fa-square-envelope fa-xl"></i> */}
              </div>
            </div>
          </div>

          {/* Steve */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Steve}/>
            </div>
            <div class="team-member-info-box">
              <h3 id="nameplate">Steve Snavely</h3>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/stevesnavely/" target="_blank">Linkedin</a>
                <a href="https://github.com/JervanSahd/" target="_blank">GitHub</a>
                <a href="mailto:info@stevesnavely.com" target="_blank">Contact</a>

                {/* Below is the code for the icons.  I was having trouble getting these icons to still appear on the screen when wrapping the <i> elements with an <a> element */}
                {/* <i class="fa-brands fa-linkedin fa-xl"></i> */}
                {/* <i class="fa-brands fa-github-square fa-xl"></i> */}
                {/* <i class="fa-solid fa-square-envelope fa-xl"></i> */}
              </div>
            </div>
          </div>

          {/* Seamona */}
          <div class="team-member-box">
            <div class="team-member-picture-box">
              <img src={Seamona}/>
            </div>
            <div class="team-member-info-box">
              <h3 id="nameplate">Seamona Stewart</h3>
              <div class="icon-box">
                <a href="https://www.linkedin.com/in/seamonajassystewart-aba25320/" target="_blank">Linkedin</a>
                <a href="https://github.com/Jaspertena" target="_blank">GitHub</a>
                <a href="mailto:Jaspertena@aol.com" target="_blank">Contact</a>

                {/* Below is the code for the icons.  I was having trouble getting these icons to still appear on the screen when wrapping the <i> elements with an <a> element */}
                {/* <i class="fa-brands fa-linkedin fa-xl"></i> */}
                {/* <i class="fa-brands fa-github-square fa-xl"></i> */}
                {/* <i class="fa-solid fa-square-envelope fa-xl"></i> */}
              </div>
            </div>
          </div>

        </div>

        
      </div>
    </section>
  );
}

export default About;