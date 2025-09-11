"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export default function BlogCaseStudyPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        {/* Top header with breadcrumb and mobile sidebar trigger */}
        <div className="flex h-16 shrink-0 items-center justify-between px-4 lg:px-6 relative z-20">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Home className="ml-auto w-3 h-3" />
                <BreadcrumbLink href="/" className="text-white/70 hover:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Bluetooth Rover</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Hide on desktop (lg and up), show on mobile/tablet, positioned at top right */}
          <div className="lg:hidden">
            <SidebarTrigger className="text-white hover:bg-white/10" />
          </div>
        </div>

        {/* Hero Section with Background */}
        <div className="relative min-h-screen flex flex-col -mt-16">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 z-0">
            {/* You can replace this with an actual image/video/gif URL */}
            <div className="w-full h-full relative overflow-hidden">
              {/* Background Picture */}
              <Image
                    src="/images/rover.jpeg" 
                    alt="Mineral deposit in Quebec"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
              {/* Optional Overlay for readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Gradient fade to #131110 at bottom */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_70%,#131110_100%)]"></div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex-1 flex flex-col justify-center p-6 lg:p-10 max-w-7xl mx-auto text-white pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column - Title and Description */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="blog-title">
                    Bluetooth Rover
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl leading-relaxed">
                Designed and assembled a bluetooth-controlled rover using Arduino, enhancing my skills in embedded systems and wireless communication.
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Oct 2021</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-2">
                
                {/* Industry */}
                <div>
                  <Badge variant="secondary" className="text-white">
                    Embedded System
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span> Embedded 
                </div>

                {/* Separator */}
                {/* <div className="h-px bg-gradient-to-r from-[#E3DEE0]/30 to-transparent"></div>  */}

                {/* Key Focus Areas */}
                <div className="space-y-1">
                  <span className="text-white font-semibold block">Key Focus Areas:</span>
                  <p className="text-[#E3DEE0] leading-relaxed">
                    Embedded Programming • Circuitry • Bluetooth Communication • C++
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content section with background color */}
<div className="bg-[#131110] text-white">
  <div className="p-6 lg:p-12 max-w-4xl mx-auto">
    <article className="space-y-12">
      
      {/* Problem Statement Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Problem Statement and Motivation</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            Create a rover-like machine that can be controlled from a wireless device. The project aimed to design and build a Bluetooth-controlled rover using an Arduino UNO, a bluetooth module, motor controller, wheels and motors.
            This project was done to develop key skills for embedded systems and wireless communication and enhance my understanding of circuitry, programming, and hardware integration.
        </p>
        
      </section>

      {/* Initial Design & Iterations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">The Design Process</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            As the goal for this project was to learn the basics of embedded programming, the chassis for the rover was a lego set of a rocketship refitted to hold motors and wheels. 
        </p>

        <div className="flex justify-center pt-6">
          <Image
            src="/images/roverchassis.jpeg"
            height={700}
            width={700}
            alt="Rover Chassis"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <p className="text-center text-base text-gray-400 italic"> Altered Lego set serving as chassis</p>

        <p className="text-lg text-gray-300 leading-relaxed">
            The Arduino Uno was mounted on top of the chassis with the motor controller and bluetooth module connected to it. The motors were connected to the wheels and the entire system was powered using batteries that we attached to the side of the chassis. Arduino IDE was used to control the motors and characterised the movement of the rover based on specific inputs.
        </p>

        <div className="flex justify-center pt-6">
          <Image
            src="/images/roverbat.jpeg"
            height={700}
            width={700}
            alt="Rover Battery"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <p className="text-center text-base text-gray-400 italic"> View of Battery Placement</p>

      </section>     

      {/* Final Design Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Final Design</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            Since this project was mainly focused on learning the basics of embedded systems and wireless communication, the final design was a simple rover that could be controlled via a mobile application. The functionality of the rover included basic movements such as forward, backward, left, and right.
        </p>

        <div className="space-y-6">
          {/* <h3 className="text-xl font-semibold text-white"></h3> */}
          
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/images/rover.jpeg"
                  height={650}
                  width={650}
                  alt="Finished Rover"
                  unoptimized
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <p className="text-center text-base text-gray-400 italic">Completed Rover Design</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/images/rovertop.jpeg"
                  height={650}
                  width={650}
                  alt="Completed Rover Top View"
                  unoptimized
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <p className="text-center text-base text-gray-400 italic">Completed Rover Top View</p>
            </div>
          </div>
        </div>

      </section>

      {/* Future Steps Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Future Steps</h2>
        
        <ul className="space-y-3 text-lg text-gray-300 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-white">• Develop a controller application rather than prebuilt bluetooth controller apps</span>
            <span></span>
          </li>
          
        </ul>
      </section>

    </article>
  </div>
</div>
      </main>
    </SidebarProvider>
  );
}