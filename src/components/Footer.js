import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import KCWhite from "../assets/keyclubsealwhite.png";
import UnionLogo from '../assets/union.png'

function Footer() {
  return (
    <footer className="bg-[#131313] flex flex-col items-center pt-16 text-[#C0C2C3]">
      <div className="tb:flex justify-center">
        <div className="links-container tb:text-left text-center justify-center tb:flex tb:flex-row ">
          <div className="links-child tb:text-left text-center w-100 flex flex-col justify-center">
            <p className="footer-title text-xl font-bold mb-[.3em]">
              Newsletters
            </p>
            <p className="footer-child tb:mb-64 ">Archives 20-21</p>
          </div>

          <div className="links-child tb:text-left text-center w-100">
            <p className="footer-title text-xl font-bold mb-[.3em] tb:px-16">
              Information
            </p>
            <p className="footer-child">Our Mission</p>
            <p className="footer-child">Advisors</p>
            <p className="footer-child">22-23 Officers</p>
            <p className="footer-child">22-23 Members</p>
            <p className="footer-child">How To Pay Dues</p>
            <p className="footer-child mb-4">How to Join</p>
          </div>

          <div className="links-child text-center tb:text-left tb:w-40 w-100 ">
            <p className="footer-title text-xl font-bold mb-[.3em]">Featured</p>
            <p className="footer-child">Gallery</p>
            <p className="footer-child">Contact Us</p>
            <p className="footer-child">Partners?</p>
            <p className="footer-child mb-4">Service Project?</p>
          </div>
        </div>
        <div className="flex justify-center w-100 tb:w-40 ">
          <div className="our-social-container w-40 text-center">
            <p className="footer-subtitle font-bold text-xl">Stay Social</p>
            <span className="social-container flex justify-center">
              <a href="https://www.instagram.com/uhskey.club/" target="_blank">
                <BsIcons.BsInstagram className="mr-2 text-4xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3] mb-4" />
              </a>
              <a href="https://www.instagram.com/uhskey.club/" target="_blank">
                <FiIcons.FiTwitter className="ml-2 text-4xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3] mb-4" />
              </a>
            </span>
          </div>
        </div>

        <div className="other-websites-container-master tb:ml-8">
          <p className="footer-subtitle font-bold text-xl">
            Other Official Websites
          </p>
          <div className="other-websites-container text-center">
            <div className="other-websites-child">
              <a
                href="https://www.kiwanis.org/"
                target="_blank"
                className="footer-child text-[#C0C2C3] hover:text-[#C0C2C3] "
              >
                www.kiwanis.org
              </a>
              <span className="mt-2 social-container flex items-center justify-center">
                <a href="https://www.instagram.com/kiwanis/" target="_blank">
                  <BsIcons.BsInstagram className="mr-2 text-3xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3]" />
                </a>
                <a href="mailto:memberservices@kiwanis.org">
                  <MdIcons.MdOutlineMailOutline className="ml-2 text-4xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3]" />
                </a>
              </span>
            </div>

            <div className="other-websites-child">
              <a
                href="https://www.keyclub.org/"
                target="_blank"
                className="footer-child other-website text-[#C0C2C3] hover:text-[#C0C2C3]"
              >
                www.keyclub.org
              </a>
              <span className="mt-2 social-container flex items-center justify-center">
                <a href="https://www.instagram.com/kiwanis/" target="_blank">
                  <BsIcons.BsInstagram className="mr-2 text-3xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3]" />
                </a>
                <a href="mailto:memberservices@kiwanis.org">
                  <MdIcons.MdOutlineMailOutline className="ml-2 text-4xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3]" />
                </a>
              </span>
            </div>

            <div className="other-websites-child">
              <a
                href="https://www.njkeyclub.org/"
                target="_blank"
                className="mb-2 footer-child other-website text-[#C0C2C3] hover:text-[#C0C2C3]"
              >
                www.njkeyclub.org
              </a>
              <span className="my-2 social-container flex items-center justify-center">
                <a href="https://www.instagram.com/kiwanis/" target="_blank">
                  <BsIcons.BsInstagram className="mr-2 text-3xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3]" />
                </a>
                <a href="mailto:memberservices@kiwanis.org">
                  <MdIcons.MdOutlineMailOutline className="ml-2 text-4xl no-underline text-[#C0C2C3] hover:text-[#C0C2C3]" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer-container bg-[#0a0a0a] w-100 text-center justify-between">
        <div className="bottom-footer flex mt-2 px-2 justify-between items-center">
          <img src={UnionLogo} alt="" className="h-[50px]" />
          <p className="bottom-footer-text text-[#fff] text-base mt-2">
            Union High School Key Club © 2022 All Rights Reserved <br />
            <span className="text-[#727272]">
              Developed by: &nbsp;
              <a className="text-reset fw-bold" href="https://beacons.ai/aviel">
                Aviel Hernandez
              </a>
            </span>
          </p>
          <img src={KCWhite} className="h-[54px]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer
//we love aviel <3 (and his nuts (kaiya said this))