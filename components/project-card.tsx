import React from 'react';
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  link: string;
  isExternal?: boolean;
  // Media options - use either photo OR video
  photo?: string;
  video?: string;
  videoZoom?: number; // Scale factor for video (e.g., 1.2 for 20% zoom)
}

interface ProjectGridProps {
  projects?: Project[];
  fullWidthCount?: number;
}

const ProjectCard: React.FC<{ 
  project: Project; 
  onCardClick: (project: Project) => void;
  isFullWidth?: boolean;
}> = ({ 
  project, 
  onCardClick,
  isFullWidth = false
}) => {
  return (
    <div
      className="group cursor-pointer transition-all duration-300"
      onClick={() => onCardClick(project)}
    >
      {/* Media Container */}
      <div
        className={`relative w-full bg-gray-800 transition-all duration-300 group-hover:brightness-110 rounded-lg overflow-hidden hover:ring-[3px] hover:ring-[#c9b6a5] hover:ring-offset-1 hover:ring-offset-background ${
          isFullWidth ? 'h-[70vh]' : 'h-100'
        }`}
      >
        {/* Render video if provided */}
        {project.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: project.videoZoom ? `scale(${project.videoZoom})` : undefined
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={project.video} type="video/mp4" />
            <source src={project.video.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : project.photo ? (
          /* Render photo if provided */
           <div className="absolute inset-0">
              <Image
                src={project.photo}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      50vw"
                style={{
                  objectFit: "cover"
                }}
                quality={100} // force max quality
              />
            </div>
        ) : (
          /* Fallback gradient background */
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
        )}
      </div>

      {/* Content Section */}
      <div className="mt-4 transition-all duration-300 group-hover:brightness-190">
        <div className="flex justify-between items-start">
          {/* Title & Subtitle */}
          <div className="flex-none mr-4">
            <div>
              {project.title}
            </div>
            <div className="text-base text-muted-foreground mt-0">
              {project.subtitle}
            </div>
          </div>

          {/* Description - Hidden on mobile */}
          <div className="hidden sm:block flex-grow pr-4">
            <small className="text-muted-foreground leading-relaxed">
              {project.description}
            </small>
          </div>

          {/* Date */}
          <div className="flex-none">
            <div className="text-base">
              {new Date(project.date).getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects = [], 
  fullWidthCount = 0 
}) => {
  const sampleProjects: Project[] = [
    {
      id: '1',
      title: 'Canadian Space Agency',
      subtitle: 'Software & Mechatronics Engineering Co-op',
      description: 'Developed a 3D-Printed control panel for the Canadarm2 robotic arm simulator.',
      date: '2023-09-14',
      photo: '/images/ISS.jpg', 
      link: '/CSA'
    },
    {
      id: '2',
      title: 'Ontario Ministry of Health',
      subtitle: 'Application Developer Co-op',
      description: 'Converted legacy VB6 codebase to modern .NET, for the terminal functionality used in Computer Aided Dispatch.',
      date: '2025-04-14',
      photo: '/images/CAD.png',
      isExternal: true,
      link: '/omh'
    },
    {
      id: '7',
      title: 'Healthcare Systems R&A',
      subtitle: 'ML & Software Engineering Co-op',
      description: 'Developed a Graph Neural Network to predict mineral concentrations for land plots in Quebec.',
      date: '2023-06-14',
      photo: '/images/quebec.jpg',
      link: '/hsra'
    },
    {
      id: '3',
      title: 'Curinos',
      subtitle: 'Automation QA Engineering Co-op',
      description: 'Automated manual test cases using Selenium and Robot Framework for improved efficiency during the quality assurance stage of development.',
      date: '2022-09-01',
      photo: '/images/curinos.png',
      link: '/curinos'
    },
    {
      id: '4',
      title: 'Two-Axis Machine Control',
      subtitle: 'Embedded Control of Mechanical System',
      description: 'Developed embedded C code for a two-axis machine using an ARM Cortex-M4 microcontroller to control stepper motors via GPIO pins.',
      date: '2025-04-01',
      photo: '/images/tam.jpeg',
      link: '/tam'
    },
    {
      id: '5',
      title: 'Gesture Recognition Neural Network',
      subtitle: 'ML Plugin for Embedded Devices',
      description: 'Built a guesture recognition neural network with Tensoflow and OpenCV meant for easy integration with future projects.',
      date: '2025-01-15',
      photo: '/images/hand.jpg',
      link: '/grnn'
    },
    {
      id: '6',
      title: 'Real-Time Operating System',
      subtitle: 'Embedded Systems',
      description: 'Developed a rough real-time operating system in C for ARM Cortex-M microcontrollers, featuring task scheduling, inter-task communication, and synchronization mechanisms.',
      date: '2024-06-10',
      photo: '/images/rtos.jpg',
      link: '/rtos'
    },
    {
      id: '8',
      title: 'Arduino Bluetooth Rover',
      subtitle: 'Embedded Development',
      description: 'Won Best Productivity App at Deltahacks for building a smart chore manager with React, Firebase, and Google Auth.',
      date: '2021-10-13',
      photo: '/images/rover.jpeg',
      link: '/rover'
    }
  ];

  const projectsToDisplay = projects.length > 0 ? projects : sampleProjects;
  const fullWidthProjects = projectsToDisplay.slice(0, fullWidthCount);
  const twoColumnProjects = projectsToDisplay.slice(fullWidthCount);

  const handleCardClick = (project: Project) => {
    if (project.isExternal) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = project.link;
    }
  };

  return (
    <div className="w-full max-w-10xl mx-auto py-8">
      {/* Full-width cards */}
      {fullWidthProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-8 mb-8">
          {fullWidthProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
              isFullWidth={true}
            />
          ))}
        </div>
      )}
      
      {/* Two-column cards */}
      {twoColumnProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {twoColumnProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
              isFullWidth={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;