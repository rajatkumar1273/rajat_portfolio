import React from "react";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Rajat Kumar",
  },
  {
    icon: <MailIcon size={20} />,
    text: "rajat1273singh@gmail.com",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9878362834",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Panchkula, Haryana, India",
  },
];

const experienceData = [
  {
    title: "education",
    data: [
      {
        university:
          "D.C. Model Senior Secondary School, Sector - 7, Panchkula, Haryana",
        qualification: "Matriculation",
        years: "2018 - 2019",
      },
      {
        university:
          "Government Model Senior Secondary School, Manimajra, Chandigarh",
        qualification: "Senior Secondary",
        years: "2020 - 2021",
      },
      {
        university: "Punjab Engineering College, Chandigarh",
        qualification:
          "Bachelor of Technology in Computer Science and Engineering",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Schoolpad Technologies Pvt. Ltd., Mohali, Punjab, India",
        role: "Software Developer Intern",
        years: "January 2024 - June 2024",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Programming Languages",
    data: ["C++", "Python", "JavaScript", "SQL", "PHP", "Dart", "TypeScript"],
  },
  {
    title: "Libraries and Frameworks",
    data: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "jQuery",
      "Flutter",
    ],
  },
  {
    title: "Computer Science Fundamentals",
    data: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
  {
    title: "Other Technologies",
    data: [
      "HTML",
      "CSS",
      "EJS",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Git & GitHub",
      "RESTful APIs",
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 mb-48">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/assets/about/developer_rajat.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="experience">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Engineering the Future</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Hello! I'm Rajat Kumar, a passionate Software Engineer and
                      Full-Stack Developer with a knack for building elegant and
                      efficient web applications. With a strong foundation in
                      both front-end and back-end technologies, I specialize in
                      creating seamless and user-friendly experiences that
                      delight users and drive business success.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* experience */}
                <TabsContent value="experience">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(experienceData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(experienceData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(experienceData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(experienceData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Bring to the Table</h3>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillsData.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="p-4 border border-border rounded-lg shadow-sm"
                            >
                              <h5 className="text-lg font-semibold mb-4 border-b border-border pb-2">
                                {item.title}
                              </h5>
                              <ul className="list-disc list-inside">
                                {item.data.map((skill, skillIndex) => {
                                  return (
                                    <li className="text-base" key={skillIndex}>
                                      {skill}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
