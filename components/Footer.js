import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import footer from "../components/layout.module.css";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <div className={footer.ctl}>
        <div className={footer.logoCtl}>
          <a href="https://www.instagram.com/steven_garman/" target="_blank">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://github.com/garman000" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/stevengarman1/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </div>
        &copy;Steven Garman, {new Date().getFullYear()} | This site was built
        using NextJS
      </div>
    </div>
  );
}
