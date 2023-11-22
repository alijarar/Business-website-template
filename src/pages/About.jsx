import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/img/backgrounds/funfact-bg.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                      {/* <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="OrS-93U4AYQ"
                        onClose={() => this.setState({ isOpen: false })}
                      /> */}
                      {/* <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button> */}
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to SALMAN PROJECT MANAGEMENT SERVICES EST</h3>
                    <h1>Excellence in Project Management</h1>
                    <h4>
                      Welcome to SALMAN PROJECT MANAGEMENT SERVICES EST, where
                      we bring years of industry-leading experience to your
                      project management needs. We're not just building
                      projects; we're crafting success stories
                    </h4>
                    <p>
                      we're prepared to turn your project dreams into reality.
                      With a commitment to excellence and a wealth of expertise,
                      we navigate the complexities of project management with
                      finesse
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    {/* <h1>
                      <span>50</span>Years of Experience
                    </h1> */}
                    <p>
                      At SALMAN PROJECT MANAGEMENT
                      SERVICES EST, we pride ourselves on being the
                      driving force behind successful projects. With a legacy of
                      excellence spanning years, we have established
                      ourselves as a trusted leader in the field of project
                      management. Our journey is fueled by a passion for turning
                      visions into reality and a commitment to delivering
                      exceptional results. We understand that each project is
                      unique, and our dedicated team of professionals is adept
                      at tailoring solutions to meet the specific needs of our
                      clients.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <p>
                      What sets us apart is our unwavering dedication to client
                      satisfaction and our holistic approach to project
                      management. From inception to completion, we provide
                      comprehensive services that encompass strategic planning,
                      meticulous execution, and seamless delivery. Our team of
                      experienced project managers is not just focused on
                      meeting expectations but exceeding them. We prioritize
                      communication, collaboration, and transparency, ensuring
                      that our clients are well-informed and confident at every
                      stage of their project.
                    </p>
                    <a
                      href={`/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          {/* <Funfact /> */}

          {/* Team member */}
          {/* <TeamMemberGrid /> */}

          {/* Testimonial Slider */}
          {/* <TestimonialSlider /> */}

          {/* Brand logo */}
          {/* <BrandLogoSlider background="" /> */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
