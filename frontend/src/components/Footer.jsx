import React from "react";
import styled from "styled-components";
import { FacebookF } from "@styled-icons/fa-brands/FacebookF";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Twitter } from "@styled-icons/fa-brands/Twitter";
import { LinkedinIn } from "@styled-icons/fa-brands/LinkedinIn";
import { FaFlagUsa } from "react-icons/fa";
// import UsFlag from "../../Images/us.png";
const FooterContainer = styled.footer`
  background-color: #121212;
  padding: 20px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
`;

const MainFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div {
    align-items: flex-start;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
    gap: 100px;
  }
`;

const LogoSection = styled.div`
  margin-bottom: 150px;
  .logo {
    font-size: 28px;
    font-weight: bold;
    color: #2a9df4;
  }
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const LinksSection = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        color: #2a9df4;
        transition: color 0.3s ease;
      }
    }
  }
`;

const SocialBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-start; */
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
    color: white;
    cursor: pointer;

    &:hover {
      color: #2a9df4;
      transition: color 0.3s ease;
    }
  }
`;

const BottomSection = styled.div`
  font-size: 14px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #2a9df4;
      transition: color 0.3s ease;
    }
  }

  span {
    display: block;
    margin-top: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter>
        <LogoSection>
          <div className="logo">FurniFlex</div>
        </LogoSection>

        <LinksContainer>
          <LinksSection>
            <ul>
              <li>
                <a href="#">Master Plan</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Invest</a>
              </li>
              <li>
                <a href="#">Pressroom</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </LinksSection>
          <LinksSection>
            <ul>
              <li>
                <a href="#">Unlock my Robot Power</a>
              </li>
              <li>
                <a href="#">Starlight</a>
              </li>
              <li>
                <a href="#">Robot Platform</a>
              </li>
              <li>
                <a href="#">EEVE Roadmap</a>
              </li>
            </ul>
          </LinksSection>
          <LinksSection>
            <ul>
              <li>
                <a href="#">Willow X Community</a>
              </li>
              <li>
                <a href="#">Developer & Maker Access</a>
              </li>
              <li>
                <a href="#">Special Cases</a>
              </li>
            </ul>
          </LinksSection>
        </LinksContainer>
      </MainFooter>
      <hr></hr>
      <SocialBottomContainer>
        <SocialIcons>
          <FacebookF />
          <Instagram />
          <Twitter />
          <LinkedinIn />
        </SocialIcons>

        <BottomSection>
          <a href="#">March22 Recap</a>
          <a href="#">Privacy Policy</a>
          <a href="#">General Terms</a>
          <a href="#">Contact</a>
          <span>EEVE © 2024. All rights reserved.</span>
        </BottomSection>
        <div>
          {/* <FaFlagUsa /> */}
          United states
        </div>
      </SocialBottomContainer>
    </FooterContainer>
  );
};

export default Footer;
