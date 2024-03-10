//styles
import { SlArrowUpCircle } from "react-icons/sl";
import "./styles.scss";

//icons
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <p id="hashtag-footer">
        #Web-Developer #Web-Design #Portfólio #Programador #Full-Stack
      </p>
      <div id="links-footer-container">
        <a
          href="https://www.instagram.com/in/vitorkravs"
          target="_blank"
          rel="noopener noreferrer"
          className="links-footer footer-instagram"
        >
          <SiInstagram style={{ color: "white" }} />
          Instagram
        </a>
        <a
          href="https://www.github.com/vitorkravs"
          target="_blank"
          rel="noopener noreferrer"
          className="links-footer footer-github"
        >
          <SiGithub style={{ color: "white" }} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vitorkravszenko/"
          target="_blank"
          rel="noopener noreferrer"
          className="links-footer footer-linkedin"
        >
          <SiLinkedin style={{ color: "white" }} />
          Linkedin
        </a>
      </div>
      <a href="#header-container" id="scroll-to-top-footer">
        Voltar ao topo <SlArrowUpCircle className="icon-scroll-to-top-footer" />
      </a>
      <p id="rights-footer">
        Direitos reservados para{" "}
        <span id="name-footer">vitor cesar kravszenko</span>
      </p>
    </footer>
  );
};

export default Footer;