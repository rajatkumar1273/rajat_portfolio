"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/work/1.png",
    category: "next js",
    name: "Smart Price",
    description:
      "E-commerce Price Tracker, enabling users to track Amazon product prices and receive email notifications for price drops and restocks with real-time data scraping, providing timely updates and informing users about product availability and price changes.",
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
    github: "https://noteverse-notes.netlify.app/",
  },
  {
    image: "/assets/work/4.png",
    category: "html, css, js",
    name: "Coin Keeper",
    description:
      "Expense tracker application that oversees income and expense tracking operations and proficiently implements item management tasks, including addition, removal, and preservation functions.",
    link: "https://coin-keeper.netlify.app/",
    github: "https://github.com/AnkitBhalla19/CoinKeeper",
  },
  {
    image: "/assets/work/5.png",
    category: "html, css, js",
    name: "Weather Wiz",
    description:
      "Weather application with OpenWeatherMap API integration for real-time weather data retrieval and display within the weather application that intuitively presents current weather conditions, including temperature, humidity, and wind speed.",
    link: "https://weather-wiz-social.netlify.app/",
    github: "https://github.com/rajatkumar1273/Weather-Wiz",
  },
  {
    image: "/assets/work/6.png",
    category: "flutter",
    name: "Bit Watch",
    description:
      "Cryptocurrency price tracker  that enables users to monitor real-time prices of Bitcoin, Ethereum, and Litecoin across more than 10 different currencies to stay ahead of the market with timely updates about price changes and trends.",
    link: "https://github.com/rajatkumar1273/bitcoin_tracker",
    github: "https://github.com/rajatkumar1273/bitcoin_tracker",
  },
  {
    image: "/assets/work/7.png",
    category: "flutter",
    name: "Flavor Fusion",
    description:
      "Meals application that has a diverse range of recipes from various categories such as Asian, Quick & Easy, Summer, Exotic, and more. Each recipe provides detailed ingredients and step-by-step cooking instructions to make your culinary journey enjoyable.",
    link: "https://github.com/rajatkumar1273/meals",
    github: "https://github.com/rajatkumar1273/meals",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects, return all projects, else return projects that match the category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
