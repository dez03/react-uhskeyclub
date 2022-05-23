import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import KCWhite from "../assets/keyclubsealwhite.png";
import UnionLogo from '../assets/union.png'

function Footer() {
  return (
    <footer className="bg-[#9e9e9e] flex flex-col items-center pt-4 ">
      <div className="links-container text-center tb:px-16 w-100 tb:flex tb:flex-row tb:justify-start ">
        <div className="links-child w-60 ">
          <p className="footer-title text-xl font-bold mb-[.3em]">
            Newsletters
          </p>
          <p className="footer-child mb-4 ">Archives 20-21</p>
        </div>

        <div className="links-child text-center w-60 mx-8">
          <p className="footer-title text-xl font-bold mb-[.3em]">
            Information
          </p>
          <p className="footer-child ">Our Mission</p>
          <p className="footer-child ">Advisors</p>
          <p className="footer-child ">22-23 Officers</p>
          <p className="footer-child ">22-23 Members</p>
          <p className="footer-child ">How To Pay Dues</p>
          <p className="footer-child mb-4 ">How to Join</p>
        </div>

        <div className="links-child text-center w-60">
          <p className="footer-title text-xl font-bold mb-[.3em]">Featured</p>
          <p className="footer-child">Gallary</p>
          <p className="footer-child">Contact Us</p>
          <p className="footer-child">Partners?</p>
          <p className="footer-child mb-4">Service Project?</p>
        </div>

        <div className="flex justify-end w-100">
          <div className="our-social-container">
            <p className="footer-subtitle font-bold text-2xl">Stay Social</p>
            <span className="social-container flex justify-center">
              <a href="https://www.instagram.com/uhskey.club/" target="_blank">
                <BsIcons.BsInstagram className="mr-2 text-4xl no-underline text-[#000] hover:text-[#000] mb-4" />
              </a>
              <a href="https://www.instagram.com/uhskey.club/" target="_blank">
                <FiIcons.FiTwitter className="ml-2 text-4xl no-underline text-[#000] hover:text-[#000] mb-4" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="other-websites-container-master ">
        <p className="footer-subtitle font-bold text-xl">
          Other Official Websites
        </p>
        <div className="other-websites-container text-center">
          <div className="other-websites-child">
            <a
              href="https://www.kiwanis.org/"
              target="_blank"
              className="footer-child text-[#000] hover:text-[#000] "
            >
              www.kiwanis.org
            </a>
            <span className="mt-2 social-container flex items-center justify-center">
              <a href="https://www.instagram.com/kiwanis/" target="_blank">
                <BsIcons.BsInstagram className="mr-2 text-3xl no-underline text-[#000] hover:text-[#000]" />
              </a>
              <a href="mailto:memberservices@kiwanis.org">
                <MdIcons.MdOutlineMailOutline className="ml-2 text-4xl no-underline text-[#000] hover:text-[#000]" />
              </a>
            </span>
          </div>

          <div className="other-websites-child">
            <a
              href="https://www.keyclub.org/"
              target="_blank"
              className="footer-child other-website text-[#000] hover:text-[#000]"
            >
              www.keyclub.org
            </a>
            <span className="mt-2 social-container flex items-center justify-center">
              <a href="https://www.instagram.com/kiwanis/" target="_blank">
                <BsIcons.BsInstagram className="mr-2 text-3xl no-underline text-[#000] hover:text-[#000]" />
              </a>
              <a href="mailto:memberservices@kiwanis.org">
                <MdIcons.MdOutlineMailOutline className="ml-2 text-4xl no-underline text-[#000] hover:text-[#000]" />
              </a>
            </span>
          </div>

          <div className="other-websites-child">
            <a
              href="https://www.njkeyclub.org/"
              target="_blank"
              className="mb-2 footer-child other-website text-[#000] hover:text-[#000]"
            >
              www.njkeyclub.org
            </a>
            <span className="my-2 social-container flex items-center justify-center">
              <a href="https://www.instagram.com/kiwanis/" target="_blank">
                <BsIcons.BsInstagram className="mr-2 text-3xl no-underline text-[#000] hover:text-[#000]" />
              </a>
              <a href="mailto:memberservices@kiwanis.org">
                <MdIcons.MdOutlineMailOutline className="ml-2 text-4xl no-underline text-[#000] hover:text-[#000]" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="bottom-footer-container bg-[#000] w-100 text-center justify-between">
        <div className="bottom-footer flex mt-2 px-2 justify-between items-center">
          <img src={UnionLogo} alt="" className="h-[50px]" />
          <p className="bottom-footer-text text-[#fff] text-base mt-2">
            Union High School Key Club © 2022 All Rights Reserved
          </p>
          <img src={KCWhite} className="h-[54px] " />
        </div>
      </div>
    </footer>
  );
}

export default Footer