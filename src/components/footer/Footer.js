import "./footer.scss";
import kixsApiLogo from "../../assets/images/kixs-api-logo-alt.png";

import { FaFacebookSquare, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <section className="main-footer-top">
          <header className="main-footer-top-header">
            <h2>Kixs</h2>
            <nav className="main-footer-nav">
              <Link to="/">Home </Link>
              <Link to={"/profile"}>Profile </Link>
              <Link to={"/favorites"}>Favorites </Link>
            </nav>
          </header>
          <p className="main-footer-item">
            portfolio:{" "}
            <a
              href="https://cedrickmonesit.github.io/Portfolio.github.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              cedrickmonesit.io
            </a>
          </p>
          <p className="main-footer-item">
            phone number: <a href="tel: 508-494-4306">508-494-4306</a>
          </p>
          <p className="main-footer-top-copyright">
            Copyright @2022 <br />
            Code and design by
            <a
              className="main-footer-copyright-name"
              href="https://github.com/cedrickmonesit"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cedrick Monesit
            </a>
          </p>
        </section>
        <section className="main-footer-bottom">
          <div className="main-footer-bottom-logo">
            <a
              href="https://github.com/cedrickmonesit/kixs-server"
              alt="Kixs API logo link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="main-footer-kixs-api-logo"
                src={kixsApiLogo}
                alt="Kixs API Logo"
              />
            </a>
          </div>
          <div className="main-footer-bottom-social-icons">
            <a
              href="https://www.facebook.com/princejohn.monesit"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare className="main-footer-social-icon" />
            </a>
            <a
              href="https://www.instagram.com/cedrickmonesit/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram className="main-footer-social-icon" />
            </a>
            <a
              href="https://github.com/cedrickmonesit"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithubSquare className="main-footer-social-icon" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
