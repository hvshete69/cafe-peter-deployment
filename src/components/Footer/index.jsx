import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <div style={{display:'flex', flexDirection:'column',}}>
              <SocialLogo to="/landingPage">Cafe Peter</SocialLogo>
              <SocialLogo to="/landingPage" style={{ fontSize:'19px', fontWeight:'200'}}>
                Anand Square, Opposite Symbosis International College,
                <br /> New Airport Rd, Viman Nagar, <br /> Pune, Maharashtra
                411014
              </SocialLogo>
            </div>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/CafePeterVimanNagar/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/cafepeterpune/?hl=en"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/cpd_pune"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://chat.whatsapp.com/KeuYpiajYYOHoddeUa6YHU"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
