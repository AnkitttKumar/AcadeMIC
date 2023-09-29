import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Company from "../components/Company-section/Company";
import About from "../components/About/About";
import Courses from "../components/Courses/Courses";
import ChooseUs from "../components/Choose-Us/ChooseUs";
import Features from "../components/Features/Features";
import FreeCourse from "../components/Free-Courese/FreeCourse";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <About />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default Home;
