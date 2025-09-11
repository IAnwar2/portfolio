import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from 'next/image';

const TeamExperience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Ontario Ministry of Health (Emergency Services)',
      role: 'Application Developer Co-op',
      year: 'Apr 2025 - Aug 2025',
      logoSrc: "/companyLogos/OMH-pic.png",
      logoAlt: "OMH Logo",
      bgColor: 'bg-white',
      bullets: [
        'Converted legacy VB6 plugin to C# for compatibility with TriTech API system for the terminal in the Computer Aided Dispatch application (CAD)',
        'Reverse-engineered the VB6 plugin to maintain COM interface compatibility and ProgIDs with CAD',
        'Implemented custom SQL store procedures to retrieve and update the database',
        'Refactored existing software components to utilize the TriTech API'
      ]
    },
    {
      id: 2,
      company: 'Candian Space Agency',
      role: 'Software Engineering Co-op',
      year: 'Jan 2024 - Apr 2024',
      logoSrc: "/companyLogos/CSA-pic.png",
      logoAlt: "Canadian Space Agency Logo",
      bgColor: 'bg-white',
      bullets: [
        'Developed a multithreaded TCP remote screen Linux app in C++ with mouse and keyboard functionality utilizing the X11 Library. The app has been deployed on all relevant machines for integration with the AR Canadarm training simulator',
        'Implemented client-side code in Unity for simulator game objects to facilitate seamless data exchange with the app',
        'Developed a recursive data cloning algorithm in Java and JavaScript for an internal test-procedure tool, leveraging RESTful APIs to deal with MySQL relational database management system, MariaDB, resulting in an 40% increase in tool productivity'
      ]
    },
    {
      id: 3,
      company: 'Candian Space Agency',
      role: 'Mechatronics Engineering Co-op',
      year: 'Sept 2023 - Dec 2023',
      logoSrc: "/companyLogos/CSA-pic.png",
      logoAlt: "Canadian Space Agency Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Designed and printed new components for 3D-Printed Display-Control Board (DCP)',
        'Used I2C boards to obtain all component statuses and then mapped and packaged into transferrable data',
        'Developed C++ code to poll input status and enable data synchronization between the physical and virtual DCP within the Canadarm simulator',
        'Wrote a detailed and complete assembly manual for the DCP'
      ]
    },
    {
      id: 4,
      company: 'Healthcare Systems Research & Analysis',
      role: 'ML & Software Engineer Co-op',
      year: 'Jun 2023 - Aug 2023',
      logoSrc: "/companyLogos/hsra-pic.jpg",
      logoAlt: "Healthcare Systems  Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Developed a Graphical Neural Network for accurate predictions of mineral concentrations for land plots',
        'Implemented robust heatmap feature of results for all ML sub-teams, thus facilitating comprehensive data analysis and interpretation'
      ]
    },
    {
      id: 5,
      company: 'Curinos',
      role: 'Technical QA Automation Engineer Co-op',
      year: 'Sep 2022 - Dec 2022',
      logoSrc: "/companyLogos/curinos-pic.png",
      logoAlt: "Curinos Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Automated manual test cases using Selenium and Robot Framework, resulting in 25% improved efficiency during the quality assurance stage of development',
        'Overhauled 100+ automated test cases, improving automation success rates from 65% to 98%, ensuring software quality and reliability'
      ]
    },
    {
      id: 6,
      company: 'Healthcare Systems Research & Analysis',
      role: 'Unity Developer Co-op',
      year: 'Jan 2021 - Apr 2021',
      logoSrc: "/companyLogos/hsra-pic.jpg", 
      logoAlt: "Healthcare Systems  Logo",
      bgColor: 'bg-white text-black',
      bullets: [
        'Developed a series of minigames aimed towards rehabilitating stroke patients as part of an AR Brain-Control Interface',
        'Implemented cloud data storage features using Microsoft Playfab for saving settings and player progress' 
      ]
    }
];

  return (
    <div className="text-white rounded-lg pt-8">
      <Accordion type="single" collapsible className="w-full">
        {experiences.map((exp) => (
          <AccordionItem key={exp.id} value={`item-${exp.id}`} className="border-[#584B50]">
            <AccordionTrigger className="hover:no-underline py-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  {/* Company Logo */}
                  <div className={`w-7 h-7 rounded-sm flex items-center justify-center overflow-hidden ${exp.bgColor}`}>
                    <Image 
                      src={exp.logoSrc} 
                      alt={exp.logoAlt}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Company Details */}
                  <div className="flex flex-row gap-3 items-baseline">
                    <span className="text-white font-normal leading-relaxed text-sm">
                      {exp.company} 
                    </span>
                    <span className="text-gray-400 text-xs font-normal leading-relaxed ">
                      /
                    </span>
                    <span className="text-gray-400 text-xs font-normal leading-relaxed ">
                      {exp.role}
                    </span>
                  </div>
                </div>

                {/* Year */}
                <div className="text-muted-foreground text-xs font-small leading-relaxed mr-4">
                  {exp.year}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="ml-9">
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index} className="text-gray-300 text-sm flex">
                      <span className="text-gray-500 mr-2 text-sm flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TeamExperience;