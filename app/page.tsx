"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import TeamExperience from "@/components/experience-list";
import SkillsSection from "@/components/skill-section";
import ProjectGrid from "@/components/project-card";
import { Home } from "lucide-react"; 
import GravityGrid from "@/components/ui/gravity-grid";
import LocationAndTimeDisplay from "@/components/location-indicator";
import ResumeEmailButtons from "@/components/resume-email-btn";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
export default function HomePage() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 "> {/* Added dotted background class: dotted-paper-bg-subtle*/}
        {/* Top header with breadcrumb and mobile sidebar trigger */}
        <div className="flex h-16 items-center justify-between px-4 lg:px-6 border-b border-neutral-800">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Home className="w-3 h-3 mr-1" />
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="lg:hidden">
            <SidebarTrigger />
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-8 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-8">
          <div className="mb-2">
            {/* <Avatar className="w-15 h-15">
              <AvatarImage src="/linkedin.jpg" alt="@shadcn" />
              <AvatarFallback>VK</AvatarFallback>
            </Avatar> */}
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-4 max-w-4xl">
            <LocationAndTimeDisplay />
          </div>

          <div className="space-y-4 max-w-7xl">
            <h3 className="max-w-4xl">
              Thanks for visiting! I'm <span className="font-bold">Ishraq Anwar</span>, a 4th year Mechatronics Engineering student at the University of Waterloo.
              I'm passionate about embedded systems, software engineering, and ML. I love building innovative solutions that combine hardware and software to solve real-world problems.
            </h3>
              I have previously had the opportunity to intern at companies like <Link href="https://www.asc-csa.gc.ca/eng/" target="_blank" className="text-blue-400 underline hover:text-blue-500">The Canadian Space Agency</Link>, <Link href="https://www.curinos.com" target="_blank" className="text-blue-400 underline hover:text-blue-500">Curinos</Link>, and <Link href="https://www.ontario.ca/page/emergency-health-services" target="_blank" className="text-blue-400 underline hover:text-blue-500">Ontario Ministry of Health - Emergency Services</Link>, where I 
              was able to contribute to impactful projects and gain hands-on experience in various fields. I'm currently seeking a four month co-op for Summer 2026 (May - Aug) to further develop my skills and make meaningful contributions.
            <h3>

            </h3>
            <div>
              <div className=" text-sm flex items-center gap-2">
                <div className="relative">
                  <div
                    className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                    style={{
                      filter: "drop-shadow(0 0 4px rgba(74, 222, 128, 0.6))",
                    }}
                  />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-20" />
                </div>
                  Currently seeking <strong> Summer 2026 Engineering Internships (May - Aug)</strong>
              </div>
            </div>

            <ResumeEmailButtons />
            {/* <GravityGrid /> */}
            <TeamExperience />
            <SkillsSection />
            <ProjectGrid fullWidthCount={1} />
          </div>
        </div>

      </main>
    </SidebarProvider>
  );
}