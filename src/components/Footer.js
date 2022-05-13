import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#9e9e9e] flex flex-col items-center pt-2">
      <div class="links-container text-center">
        <div class="links-child">
          <p class="footer-title font-bold">Newsletters</p>
          <p class="footer-child last-child">Archives 20-21</p>
        </div>

        <div class="links-child text-center">
          <p class="footer-title font-bold">Information</p>
          <p class="footer-child">Our Mission</p>
          <p class="footer-child">Advisors</p>
          <p class="footer-child">22-23 Officers</p>
          <p class="footer-child">22-23 Members</p>
          <p class="footer-child">How To Pay Dues</p>
          <p class="footer-child last-child">How to Join</p>
        </div>

        <div class="links-child text-center">
          <p class="footer-title font-bold">Featured</p>
          <p class="footer-child">Gallary</p>
          <p class="footer-child">Contact Us</p>
          <p class="footer-child">Partners?</p>
          <p class="footer-child last-child">Service Project?</p>
        </div>

        <div class="our-social-container">
          <p class="footer-subtitle">Stay Social</p>
          <span class="social-container">
            <a href="https://www.instagram.com/uhskey.club/" target="_blank">
              <img
                src="/images/instagram.svg"
                alt=""
                class="instagramicon-ours"
              />
            </a>
            <a href="https://www.remind.com/join/b78cb2" target="_blank">
              <img src="/images/remind-app.png" alt="" class="remind" />
            </a>
          </span>
        </div>
      </div>

      <div class="other-websites-container-master">
        <p class="footer-subtitle">Other Official Websites</p>
        <div class="other-websites-container">
          <div class="other-websites-child">
            <a
              href="https://www.kiwanis.org/"
              target="_blank"
              class="footer-child"
            >
              www.kiwanis.org
            </a>
            <span class="social-container">
              <a href="https://www.instagram.com/kiwanis/" target="_blank">
                <img src="/images/instagram.svg" alt="" class="instagramicon" />
              </a>
              <a href="mailto:memberservices@kiwanis.org">
                <img src="/images/email.svg" class="email-icon" />
              </a>
            </span>
          </div>

          <div class="other-websites-child">
            <a
              href="https://www.keyclub.org/"
              target="_blank"
              class="footer-child other-website"
            >
              www.keyclub.org
            </a>
            <span class="social-container">
              <a href="https://www.instagram.com/keyclubint/" target="_blank">
                <img src="/images/instagram.svg" alt="" class="instagramicon" />
              </a>
              <a href="mailto:keyclub@kiwanis.org">
                <img src="/images/email.svg" class="email-icon" />
              </a>
            </span>
          </div>

          <div class="other-websites-child">
            <a
              href="https://www.njkeyclub.org/"
              target="_blank"
              class="footer-child other-website"
            >
              www.njkeyclub.org
            </a>
            <span class="social-container">
              <a href="https://www.instagram.com/njkeyclub/" target="_blank">
                <img src="/images/instagram.svg" alt="" class="instagramicon" />
              </a>
              <a href="mailto:keyclub@kiwanis.org">
                <img src="/images/email.svg" class="last-icon email-icon" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* <div class="bottom-footer-container">
      <div class="bottom-footer">
        <img src="/images/union.png" alt="" class="unionlogo">
        <img src="/images/keyclubsealwhite.png" alt="" class="KClogo">
      </div>
    <p class="bottom-footer-text">Union High School Key Club © 2022 All Rights Reserved</p>
  </div> */}
    </footer>
  );
}

export default Footer