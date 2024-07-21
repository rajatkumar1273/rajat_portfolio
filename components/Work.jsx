"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required swiper components
import { Pagination } from "swiper/modules";

import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    image: "/assets/work/1.png",
    category: "next js",
    name: "Smart Price",
    description:
      "E-commerce price tracker, enabling users to track Amazon product prices and receive email notifications for price drops and restocks with real-time data scraping, providing timely updates and informing users about product availability and price changes.",
    link: "https://smart-price-cart.vercel.app/",
    github: "https://github.com/rajatkumar1273/smart-price",
  },
  {
    image: "/assets/work/3.png",
    category: "next js",
    name: "Rise Together",
    description:
      "Crowdfunding platform, incorporating advanced admin functionalities such as campaign management, user administration, intuitive user-facing features for seamless campaign discovery, including category-based filtering and organizer search.",
    link: "https://rise-together.vercel.app/",
    github: "https://github.com/rajatkumar1273/rise_together",
  },
  {
    image: "/assets/work/2.png",
    category: "react js",
    name: "Noteverse",
    description:
      "A stylish and user-friendly notes app that allows users to create, manage, and efficiently delete notes that is designed to facilitate note-taking and structured organization of personal notes in an intuitive way.",
    link: "https://noteverse-notes.netlify.app/",
    github: "https://github.com/rajatkumar1273/note_verse",
  },
  {
    image: "/assets/work/8.png",
    category: "next js",
    name: "Care Pulse",
    description:
      "Healthcare management system, featuring secure patient registration, appointment scheduling, and an admin dashboard for managing and monitoring appointments with real-time SMS notifications.",
    link: "https://care-pulse-health-care.vercel.app/",
    github: "https://github.com/rajatkumar1273/care_pulse",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto flex flex-col xl:flex-row">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:mb-0 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore my latest projects, where I apply innovative solutions and
            cutting-edge technologies from initial concept to final deployment.
            Each project reflects my dedication to excellence and continuous
            improvement.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:ml-auto">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
