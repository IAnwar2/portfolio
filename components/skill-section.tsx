import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

// Define interfaces for type safety
interface Skill {
  name: string;
  icon: string | null;
}

interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  technologies: Skill[];
}

interface SkillItemProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

interface SkillColumnProps {
  title: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillsData: SkillsData = {
    languages: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'XML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    frameworks: [
      { name: 'Simulink', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
      { name: 'Robot Framework', icon: '' },
      { name: '.NET core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
    technologies: [
      { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg' },
      { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg' },
      { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'Raspberry Pi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
      { name: 'STM32', icon: '' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg' },
      { name: 'Cura', icon: '' },
      { name: 'SolidWorks', icon: '' },
      { name: 'AutoCAD', icon: '' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
      { name: 'Testrail', icon: '' },
      { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
      { name: 'Jupyter Notebook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg' },
      { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
    ]
  };

  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  const SkillItem: React.FC<SkillItemProps> = ({ skill, index, isVisible }) => (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-out transform ${
        mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      style={{
        backgroundColor: '#1d1b19',
        transitionDelay: mounted ? `${index * 50}ms` : '0ms'
      }}
    >
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt={skill.name}
          width={24}
          height={24}
          className="w-6 h-6 object-contain flex-shrink-0 transition-transform duration-200 hover:scale-110"
        />
      ) : (
        <div className="w-6 h-6 flex-shrink-0 bg-gray-300 rounded flex items-center justify-center transition-transform duration-200 hover:scale-110">
          <span className="text-xs font-medium text-gray-600">
            {skill.name.charAt(0)}
          </span>
        </div>
      )}
      <span className="text-muted-foreground transition-colors duration-200 hover:text-gray-300">{skill.name}</span>
    </div>
  );

  const SkillColumn: React.FC<SkillColumnProps> = ({ title, skills }) => {
    const displayedSkills: Skill[] = skills.slice(0, 5);
    const hiddenSkills: Skill[] = skills.slice(5);

    return (
      <div className="w-full">
        <h3 className="text-left text-white font-medium text-xs m-2">{title}</h3>
        <div className="space-y-2">
          {displayedSkills.map((skill: Skill, index: number) => (
            <SkillItem key={skill.name} skill={skill} index={index} isVisible={true} />
          ))}

          {hiddenSkills.length > 0 && (
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isExpanded ? `${hiddenSkills.length * 60}px` : '0px',
                opacity: isExpanded ? 1 : 0
              }}
            >
              <div className="space-y-2">
                {hiddenSkills.map((skill: Skill, index: number) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isVisible={isExpanded}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="hidden lg:block w-full py-8" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
        <SkillColumn
          title="Languages"
          skills={skillsData.languages}
        />
        <SkillColumn
          title="Frameworks"
          skills={skillsData.frameworks}
        />
        <SkillColumn
          title="Technologies"
          skills={skillsData.technologies}
        />
      </div>

      <div className="text-center">
        <button
          onClick={toggleExpanded}
         className="flex items-center justify-center space-x-2 mx-auto px-6 py-2 transition-all duration-300 ease-out  hover:bg-[#28201d] rounded-lg group"
        >
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 transition-transform text-muted-foreground duration-200 group-hover:scale-110" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform text-muted-foreground duration-200 group-hover:scale-110" />
          )}
          <span className="transition-colors text-muted-foreground">
            {isExpanded ? 'Show Less' : 'Show More'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;