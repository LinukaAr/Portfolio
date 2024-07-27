import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';


function App() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Start your development with Steller landing page."
      />
      <meta name="author" content="Devcrud" />
      <title>Linuka Arambawela</title>
      <link rel="icon" type="image/png" href="assets/imgs/favicon.png" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      {/* font icons */}
      <link
        rel="stylesheet"
        href="assets/vendors/themify-icons/css/themify-icons.css"
      />
      {/* Bootstrap + Steller main styles */}
      <link rel="stylesheet" href="assets/css/styles.css" />
      {/* Page navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        data-spy="affix"
        data-offset-top={0}
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="assets/imgs/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Skils
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certifications">
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of page navibation */}
      {/*Notification*/}
      <div id="notifications-container" />
      {/* Page Header */}
      <header className="header" id="home">
        <div className="container">
          <div className="infos">
            <h6 className="subtitle">Hello, I'm</h6>
            <h6 className="title">Linuka Arambawela</h6>
            <p className="position">Designer/Developer</p>
            <div className="buttons pt-3">
              {/*<button class="btn btn-primary rounded" href="#contact">HIRE ME</button>*/}
              <a
                className="btn btn-primary rounded shake"
                href="https://drive.google.com/drive/folders/1Fr4FEvTsbg78oJzoTCTcGbH58O8syNxW?usp=sharing"
                target="_blank"
              >
                DOWNLOAD CV
              </a>
              <div id="chatbot-interface">
                <div id="chatbot-container" onclick="toggleChatbot()">
                  💬
                </div>
                <iframe
                  id="chatbot-iframe"
                  src="https://webchat.botframework.com/embed/BotLinuka001-bot?s=M04d4Mc2uFs.R_TSo08qcu1OkbI607q_NdwA9ogQT5vhH4y8JMw8tjY"
                />
                <iframe
                  id="chatbot-iframe"
                  src="https://webchat.botframework.com/embed/BotLinuka?s=CEL06t7IRmw._aPOqFdzr54M-VpFQJrYYY-IZfAFsd2Shj_CH150SoY"
                />
              </div>
            </div>
            <div className="socials mt-4">
              <a
                className="social-item-up"
                href="https://www.linkedin.com/in/linuka-arambawela"
                target="_blank"
              >
                <i className="ti-linkedin" />
              </a>
              <a
                className="social-item-up"
                href="https://github.com/LinukaAr"
                target="_blank"
              >
                <i className="ti-github" />
              </a>
              <a
                className="social-item-up"
                href="https://medium.com/@linukaarambawela"
                target="_blank"
              >
                <i className="fa-brands fa-medium" />
              </a>
              <a
                className="social-item-up"
                href="https://web.facebook.com/LinukaArambawela/"
                target="_blank"
              >
                <i className="ti-facebook" />
              </a>
              <a
                className="social-item-up"
                href="https://instagram.com/linuka_ar?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <i className="ti-instagram" />
              </a>
            </div>
          </div>
          <div className="img-holder">
            <img src="assets/imgs/boy3.png" alt="" />
          </div>
        </div>
        {/* Header-widget */}
        <div className="widget">
          <div className="widget-item">
            <p>
              Who am I <span className="spin" />
            </p>
          </div>
        </div>
      </header>
      {/* End of Page Header */}
      {/* About section */}
      <section id="about" className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <img
                src="assets/imgs/avatar.jpeg"
                alt=""
                className="img-thumbnail mb-4"
              />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">Linuka Arambawela</h6>
              <p className="subtitle">Designer/Developer</p>
              <p>
                I am a passionate IT enthusiast who is currently pursuing a degree
                in Computer Science. I have completed my GCE Advanced Level
                examination in the physical science stream at Richmond College, and
                have a strong desire to learn and grow in the IT industry. I believe
                that technology has the power to make a positive impact on the
                world, and I want to be a part of that change. This portfolio
                showcases some of the projects I have worked on and the skills I
                have acquired.
              </p>
              <a
                className="btn btn-primary rounded mt-3 shake"
                href="https://drive.google.com/drive/folders/1Fr4FEvTsbg78oJzoTCTcGbH58O8syNxW?usp=sharing"
                target="_blank"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Experience section */}
      <section className="section text-light">
        <div className="container text-left">
          <div className="mt-4 experience">
            <br />
            <h6 className="section-title mb-4">Education</h6>
            <p>
              *{" "}
              <strong section-title="" mb-4="">
                University of Westminster(IIT, Sri Lanka):
              </strong>
              <br />
              Bsc(Hons) in Computer Science
            </p>
            <p>
              *{" "}
              <strong section-title="" mb-4="">
                Institute of Software Engineering
              </strong>
              <br />
              Diploma in Comprehensive Master Java Developer
            </p>
            <p>
              *{" "}
              <strong section-title="" mb-4="">
                Richmond College:
              </strong>
              <br />
              During my college years, I gained valuable experiences through various
              roles:
            </p>
            <ul>
              <li>
                <strong>
                  Coordinator of{" "}
                  <a
                    href="https://web.facebook.com/RITS.KNGINE/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    Rchmond IT Society
                  </a>
                  :
                </strong>{" "}
                Led initiatives and organized events within the IT Society,
                fostering collaboration among members.
              </li>
              <li>
                <strong>
                  Treasurer of{" "}
                  <a
                    href="https://web.facebook.com/richmondrobotics/?_rdc=1&_rdr"
                    target="_blank"
                  >
                    Rchmond College Robotics Club
                  </a>
                  :
                </strong>{" "}
                Managed finances and resources, contributing to innovative projects
                within the Robotics Club.
              </li>
              <li>
                <strong>
                  Crew Member of{" "}
                  <a href="https://www.richmondlive.lk/" target="_blank">
                    Richmond Live
                  </a>
                  :
                </strong>{" "}
                Actively participated in live productions, learning event management
                intricacies.
              </li>
            </ul>
            These roles equipped me with valuable teamwork, leadership, and
            organizational skills, reinforcing my commitment to personal and
            professional growth in the IT field.
            <p />
            <ul>
              <li>
                Member of Young Inventers Club
                <strong />
              </li>
              <li>
                Primary &amp; Junior Prefect
                <strong />{" "}
              </li>
              <li>
                U13 Crickter
                <strong />{" "}
              </li>
              <li>
                A Scout
                <strong />{" "}
              </li>
            </ul>
            <p>These roles help me to gain and improve my soft skills.</p>
          </div>
        </div>
      </section>
      {/* Snaps section */}
      <section className="section">
        <div className="container">
          <h6 className="section-title mt-5 mb-4">Snaps</h6>
          <div className="row">
            {/* Gallery items */}
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/11.jpeg"
                  className="img-fluid"
                  alt="Image 1"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/2.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/3.jpeg"
                  className="img-fluid"
                  alt="Image 3"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/5.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/6.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/13.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/8.PNG"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/7.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/16.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/4.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/live id.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="gallery-item">
                <img
                  src="assets/imgs/Slide/12.jpeg"
                  className="img-fluid"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section */}
      <section id="service" className="section">
        <div className="container text-center">
          <h6 className="section-title mb-4">Expertise</h6>
          <p className="mb-5 pb-4">
            <br />
          </p>
          {/*para*/}
          <div className="row">
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-world" />
                  <h5 className="card-h5">Web Design</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-desktop" />
                  <h5 className="card-h5">IT Support</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-mobile" />
                  <h5 className="card-h5">Java Applications</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-cloud" />
                  <h5 className="card-h5">Cloud</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Sectoin */}
      {/* Skills section */}
      <section className="section" id="skills">
        <div className="container text-center">
          <h6 className="subtitle" />
          <h6 className="section-title mb-4">My Skils</h6>
          <p className="mb-5 pb-4">
            {" "}
            <br />{" "}
          </p>
          <div className="row text-left">
            <div className="col-sm-6">
              <h6 className="mb-3">HTML</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "89%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>89%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">CSS</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "83%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>83%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Bootsrap</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "89%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>89%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Java</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">SpringBoot</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "89%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>89%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">JavaScript</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">SQL</h6>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="certifications">
        <div className="container text-center">
          <h6 className="subtitle" />
          <h6 className="section-title mt-5 mb-4">My Certifications</h6>
          <p className="mb-4 pb-2">
            {" "}
            <br />{" "}
          </p>
          <div className="row text-center">
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">Comprehensive Master Java Developer | IJSE</h6>
              <p>
                <a
                  href="https://drive.google.com/file/d/1lT9z5tVANtBpLeb7YnjMcTgDLSHJU4CM/view?usp=drive_link"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">Responsive Web Design | freeCodeCamp</h6>
              <p>
                <a
                  href="https://freecodecamp.org/certification/fccccd656dd-fffc-4c38-a6bf-6c93ce09e265/responsive-web-design"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">
                JavaScript Algorithms and Data Structures | freeCodeCamp
              </h6>
              <p>
                <a
                  href="https://www.freecodecamp.org/certification/fccccd656dd-fffc-4c38-a6bf-6c93ce09e265/javascript-algorithms-and-data-structures"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3 ">Google UX Design Professional Certificate</h6>
              <p>
                <a
                  href="https://coursera.org/share/1cb80b1ecdb0bca02c767bb7b1ba7293"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">Live Production | Richmond Live</h6>
              <p>
                <a
                  href="https://academy.richmondlive.lk/profile/uVPlZtYtneaVyN0ky2u3IIRRBw22"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">Web Design and Development | Richmond Live</h6>
              <p>
                <a
                  href="https://academy.richmondlive.lk/profile/uVPlZtYtneaVyN0ky2u3IIRRBw22"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">
                Fundamentals of Digital Marketing | Google Digital Garage
              </h6>
              <p>
                <a
                  href="https://drive.google.com/file/d/1YNhygOhqp-UpskluJ9wSlVKd7VAp6TAa/view?usp=sharing"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">Hacktoberfest 2023</h6>
              <p>
                <a
                  href="https://drive.google.com/file/d/1MPyviksWj-cdRIONnGIoNkeqoJJxrUTr/view?usp=sharing"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">Python for Beginners | UOM</h6>
              <p>
                <a
                  href="https://drive.google.com/file/d/1T5rgGOEritQXkcXWgsg6unl6GsxW91hJ/view?usp=sharing"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
            <div className="col-sm-6 mb-4">
              <h6 className="mb-3">
                Certificate in Cyber Security &amp; Networking | NextGen Campus
              </h6>
              <p>
                <a
                  href="https://drive.google.com/file/d/1FxKrm8GOjyGVpESYu_Ea98I-J1Bag5UB/view?usp=sharing"
                  target="_blank"
                >
                  View Certification
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="." id="badges">
        <div className="container text-center">
          {/* <h6 class="subtitle"></h6> <h6 class="section-title mt-5 mb-4">My Badges</h6>  */}
          <p className="mb-5 pb-4">
            {" "}
            <br />{" "}
          </p>
          <div className="row text-center">
            <div className="col-sm-6 col-md-3 mb-4">
              <a
                href="https://learn.microsoft.com/api/credentials/share/en-us/LinukaArambawela-3225/AC4E6FB8BA5D8076?sharingId"
                target="_blank"
              >
                <div className="img-wrapper">
                  <img
                    src="assets/imgs/badges/microsoft-certified-fundamentals-badge.svg"
                    alt="ms Skills"
                  />
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="img-wrapper">
                <img src="assets/imgs/badges/ms skill ii.png" alt="ms Skills" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="img-wrapper">
                <img src="assets/imgs/badges/ms skill.png" alt="ms Skills" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <a
                href="https://api.badgr.io/public/assertions/FLJ65XP4Q_i8cke2VKIP5Q?identity__email=linukaarambawela%40gmail.com"
                target="_blank"
              >
                <div className="img-wrapper">
                  <img src="assets/imgs/badges/postman.png" alt="Postman" />
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="img-wrapper">
                <img src="assets/imgs/badges/aws etc.png" alt="aws etc" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <a
                href="https://www.credly.com/badges/28c7e732-067d-4547-8746-2192b35532b0/linked_in_profile"
                target="_blank"
              >
                <div className="img-wrapper">
                  <img src="assets/imgs/badges/aws.png" alt="aws" />
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-3 mb-">
              <a
                href="https://www.credly.com/badges/816d4610-d8e2-4aa5-839a-5954b6b24289/linked_in_profile"
                target="_blank"
              >
                <div className="img-wrapper">
                  <img src="assets/imgs/badges/networking-basics.png" alt="cisco" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End of Skills sections */}
      {/* Portfolio section */}
      <section id="portfolio" className="section">
        <div className="container text-center">
          <h6 className="subtitle" />
          <h6 className="section-title mb-4">My Projects</h6>
          <p className="mb-5 pb-4" />
          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/Live chat/live chat.PNG" alt="livechat" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>LiveChat SpringBoot|Websocket</h5>
                    <a href="https://mychatapp0.azurewebsites.net/" target="_blank">
                      <i className="ti-control-play" />
                    </a>
                    <a href="assets/imgs/Live chat/live chat.PNG" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a href="https://github.com/LinukaAr/LiveChat" target="_blank">
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/Mystore/1.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Online Store ReactJs|SpringBoot</h5>
                    <a href="assets/imgs/Mystore/1.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a
                      href="https://github.com/LinukaAr/MyStore-React"
                      target="_blank"
                    >
                      FE
                    </a>
                    <a
                      href="https://github.com/LinukaAr/MyStore-Springboot"
                      target="_blank"
                    >
                      BE
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/carSale/carSale1.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos" data-link="">
                    <h5>Rent a Car Java App</h5>
                    <a href="assets/imgs/carSale/carSale1.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a
                      href="https://github.com/LinukaAr/Rent-A-Car"
                      target="_blank"
                    >
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/toDolist/Untitled.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>To Do List</h5>
                    <a href="assets/imgs/toDolist/Untitled.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a href="https://github.com/LinukaAr/Todo-List" target="_blank">
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/portfolio/portforlio.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Simple Protfolio</h5>
                    <a href="assets/imgs/portfolio/portforlio.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a
                      href="https://github.com/LinukaAr/Linukatest"
                      target="_blank"
                    >
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/loginSignUp/1.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Java Swing Login/SignUp</h5>
                    <a href="assets/imgs/loginSignUp/1.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a
                      href="https://github.com/LinukaAr/Java-LoginAndSignUp"
                      target="_blank"
                    >
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/profleCard/1.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>CSS Profile Card</h5>
                    <a href="assets/imgs/profleCard/1.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a
                      href="https://github.com/LinukaAr/Profile_Card"
                      target="_blank"
                    >
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/rockpaper.png" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Rock Paper Scissors JavaScript</h5>
                    <a href="assets/imgs/rockpaper.png" target="_blank">
                      <i className="ti-zoom-in" />
                    </a>
                    <a
                      href="https://github.com/LinukaAr/rock-paper-scissors-js"
                      target="_blank"
                    >
                      <i className="ti-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of portfolio section */}
      {/* Hire me section */}
      <section className="bg-gray p-0 section">
        <div className="container">
          <div className="card ">
            <div className="card-body text-light">
              <div className="row align-items-center">
                <div className="col-sm-9 text-center text-sm-left">
                  {/*<p class="mb-3">Hire Me For Your Project</p>*/}
                  <p className="mb-3">Let's work together!</p>
                </div>
                <div className="col-sm-3 text-center text-sm-right">
                  <a className="btn btn-light rounded" href="#contact">
                    Say Hi!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End od Hire me section. */}
      {/* Contact Section */}
      <section id="contact" className="position-relative section">
        <div className="container text-center">
          <h6 className="subtitle" />
          <h6 className="section-title mb-4">Connect with me</h6>
          <p className="mb-5 pb-4">
            {" "}
            <br />
          </p>
          <div className="contact text-left">
            <div className="form">
              <h6 className="subtitle" />
              <h6 className="section-title mb-4">Get In Touch</h6>
              <form
                action="https://formsubmit.co/linukaarambawela@gmail.com"
                method="POST"
              >
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <input
                  type="hidden"
                  name="_next"
                  defaultValue=""
                />
                <input type="hidden" name="_captcha" defaultValue="false" />
                <button
                  type="submit"
                  className="btn btn-primary btn-block rounded w-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="contact-infos">
              <div className="item">
                <i className="ti-location-pin" />
                <div className="">
                  <h5>Location</h5>
                  <p className="details"> Galle, Sri Lanka</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-mobile" />
                <div>
                  <h5>Phone Number</h5>
                  <p className="details">+94 703911990</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-email" />
                <div className="mb-0">
                  <h5>Email Address</h5>
                  <p className="details">linukaarambawela@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Contact Section */}
      {/* Page Footer */}
      <footer className="page-footer">
        <div className="container">
          <div className="mid">
            <div className="links">
              <div className="socials-bottom">
                <a
                  className="social-item"
                  href="https://www.linkedin.com/in/linuka-arambawela"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  className="social-item"
                  href="https://github.com/LinukaAr"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  className="social-item"
                  href="https://medium.com/@linukaarambawela"
                  target="_blank"
                >
                  <i className="fab fa-medium" />
                </a>
                <a
                  className="social-item"
                  href="https://web.facebook.com/LinukaArambawela/"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </a>
                <a
                  className="social-item"
                  href="https://instagram.com/linuka_ar?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <p className="copyright">
                © Linuka Arambawela 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* End of page footer */}
      {/* ... TestL ... */}
      {/* core  */}
      {/* bootstrap 3 affix */}
      {/* steller js */}
    </>

  );
}

// const ContactForm = () => {
//   const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     history.push('/thank-you');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <textarea
//             className="form-control"
//             placeholder="Message"
//             defaultValue={""}
//           />
//         </div>
//         <input
//           type="hidden"
//           name="_next"
//           defaultValue=""
//         />
//         <input type="hidden" name="_captcha" defaultValue="false" />
//         <button
//           type="submit"
//           className="btn btn-primary btn-block rounded w-lg"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// const ThankYou = () => {
//   return (
//     <div>
//       <h1>Thank You!</h1>
//       <p>Your message has been sent successfully.</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
    
//   );
// };

export default App;