"use client";

import React from "react";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiMailFill,
  RiTwitterXFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/rajat-kumar-987335251/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/rajatkumar1273",
    name: <RiGithubFill />,
  },
  {
    path: "https://x.com/_rajat1273_",
    name: <RiTwitterXFill />,
  },
  {
    path: "mailto:rajat1273singh@gmail.com",
    name: <RiMailFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
