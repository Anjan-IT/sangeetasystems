/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/ui/NavBar";
import HyperText from "@/components/ui/HyperText";
import { motion } from "framer-motion";
import { services } from "@/data";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const servicesCardRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {

    // GSAP Animations with ScrollTrigger
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".animate-hero"), {
        opacity: 25,
        y: 20,
        duration: 0,
        stagger: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "20% center top",
          toggleActions: "play pause reverse reset", // Animation plays only once
        },
      });
    }
    if (servicesCardRef.current) {
      gsap.fromTo(
        servicesCardRef.current.querySelectorAll(".service-card"),

        {
          opacity: 1, // Start fully transparent
          scale: 1.5, // Start larger in size
          x: () => gsap.utils.random(-200, 200), // Randomize horizontal position
          y: () => gsap.utils.random(-200, 200), // Randomize vertical position
        },
        {
          opacity: 1, // Fade into view
          scale: 1, // Shrink down to normal size
          x: 0, // Return to the original horizontal position
          y: 0, // Return to the original vertical position
          duration: 0.5, // Duration for each animation
          stagger: 0.2, // Delay between each card
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: servicesCardRef.current,
            start: "20% center top", // When 80% of the section is in view, start the animation
            toggleActions: "play repeat play none", // Play the animation once

            invalidateOnRefresh: true,
          },
        }
      );
    }

    if (aboutRef.current) {
      gsap.from(aboutRef.current, {
        opacity: 25,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play pause reverse reset",
          invalidateOnRefresh: true,
        },
      });
    }

    if (testimonialsRef.current) {
      gsap.from(testimonialsRef.current.querySelectorAll(".testimonial"), {
        opacity: 30,
        x: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play pause reverse reset",
          invalidateOnRefresh: true,
        },
      });
    }
    if (servicesRef.current) {
      const sections = servicesRef.current.querySelectorAll(".service-section");

      sections.forEach((section, index) => {
        const content = section.querySelector(".service-content");
        const image = section.querySelector(".service-image");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section, // Ensure the trigger is the section
              start: "10% bottom", // Adjust the scroll start position so the animation starts when 80% of the section is in view
              end: " 40%", // End when the bottom is 20% from the viewport
              toggleActions: "play reverse play reverse", // Play and reverse on scroll
              scrub: 1,
              // Remove the markers property to hide them
            },
          })
          .fromTo(
            content,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2 }
          )
          .fromTo(
            image,
            { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.2 },
            "-=0.3"
          );
      });
    }

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers to prevent them from affecting other pages
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className=" text-black"
      style={{
        backgroundColor: "#FEDCCE",
      }}
    >
      <Navbar />
      <div id="smooth-content">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center"
        >
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          >
            <source src="/servicesBG.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0  opacity-50"></div>

          <div className="relative z-10 text-center">
            <h1 className=""></h1>
            <HyperText
              className="animate-hero text-5xl md:text-7xl font-bold mb-4"
              text="IT Solutions for Tomorrow"
            />
            <p className="animate-hero text-xl md:text-2xl mb-8">
              Empowering businesses with cutting-edge technology
            </p>
            <button className="animate-hero bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Get Started
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesCardRef}
          className="py-20 px-4 md:px-8"
          style={{
            backgroundColor: "#FEDCCE",
          }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cloud Solutions", icon: "☁️" ,description:"Scalable and secure cloud solutions tailored to your business needs."},
              { title: "Cybersecurity", icon: "🔒" ,description:"Advanced security measures to protect your digital assets."},
              { title: "Data Analytics", icon: "📊" ,description:"Transform your data into actionable insights with our analytics services."},
              { title: "AI & Machine Learning", icon: "🤖" ,description:"Leverage AI and machine learning to drive innovation and efficiency."},
              { title: "IoT Integration", icon: "🌐" ,description:"Seamlessly integrate IoT devices to enhance connectivity and automation."},
              { title: "IT Consulting", icon: "💼" ,description:"Expert IT consulting to help you navigate complex technology challenges."},
            ].map((service, index) => (
              <div
                key={index}
                className="service-card  p-6 rounded-lg shadow-lg"
                style={{
                  backgroundColor: "#CDC2C4",
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-black">{service.description}.</p>
              </div>
            ))}
          </div>
        </section>

        <div
          ref={servicesRef}
          className=" min-h-screen"
          style={{
            backgroundColor: "#FEDCCE",
          }}
        >
          {services.map((service, index) => (
            <section
              key={service.title}
              className={`service-section flex flex-col   md:flex-row items-center justify-between py-20 px-8 md:px-20 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="service-content  ml-5  w-full md:w-1/2 mb-4  md:mb-0">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>

              <motion.div
                className="service-image w-full md:w-1/2"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            </section>
          ))}
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
