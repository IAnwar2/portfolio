"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
                <BreadcrumbPage className="text-white">Two-Axis Machine Control</BreadcrumbPage>
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
                    src="/images/tam.jpeg" 
                    alt="Two-Axis Machine"
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
                    Two-Axis Machine Control
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl leading-relaxed">
                    Designed and programmed embedded C code using ADC potentiometer inputs for precise and efficient control of a two-axis machine.
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Apr 2025</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-2">
                
                {/* Industry */}
                <div>
                  <Badge variant="secondary" className="text-white">
                    Embedded Systems
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role */}
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span> Embedded Programming
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#E3DEE0]/30 to-transparent"></div>

                {/* Key Focus Areas */}
                <div className="space-y-1">
                  <span className="text-white font-semibold block">Key Focus Areas:</span>
                  <p className="text-[#E3DEE0] leading-relaxed">
                    C • Embedded Systems • STM32 • Circuit Design
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
        <h2 className="text-3xl font-bold text-white">Problem Statement</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            The objective of this project was to design and program a two-axis machine that could be controlled using potentiometer inputs. 
            The machine needed to be capable of precise movements in both the X and Y axes, allowing for fast and accurate positioning and operation. The challenge was to create a system that was not only functional but also efficient and user-friendly.
        </p>
        
      </section>

      {/* Initial Design & Iterations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Design Process</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            There were three main components to this project. Each component required a mix of circuitry and software design to ensure the system worked seamlessly together.
            The first component was to define motor behaviour to handle limit switch triggering. A key feature that had to be considered in design was that since the machine could potentially trigger both switches at the same time. Therefore the system must be able to handle simultaneous triggers and move the motors back to a safe position.
            To implement this type of algorithm, software interrupts were used to catch the limit switch triggers.
        </p>

        <div className="flex justify-center pt-6">
            <Image
            src="/images/interrupt.png"
            height={600}
            width={600}
            alt="Limit Switch Interrupt Code"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
            />
        </div>
        <p className="text-center text-base text-gray-400 italic">Limit Switch Interrupt Code</p>

        <p className="text-lg text-gray-300 leading-relaxed">
            The next component was to implement ADC reading of potentiometer inputs to control the position of the motors. Once the code was implemented, it was then cross referenced to voltage readings from the potentiometer to verify accurate readings. 
            The ADC readings were then mapped to the motor speed and direction. A deadband was also implemented to prevent the motors from moving when the potentiometer was in the center position. This was done to prevent the motors from constantly moving when the potentiometer was not being adjusted. Furthermore, the range of values usable for controlling the motors was made dynamic accross the range of the potentiometer such that once the system is started, it is not a requirement for the potentiometer to be set inside the deadband, allowing easier usage.
        </p>

        <div className="flex justify-center pt-6">
            <Image
            src="/images/potscale.png"
            height={600}
            width={600}
            alt="ADC Input Map"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
            />
        </div>
        <p className="text-center text-base text-gray-400 italic">ADC Input Mapping</p>

        <video
            autoPlay
            loop
            muted
            playsInline
            className="flex justify-center pt-2 max-w-sm mx-auto rounded-lg object-cover shadow-lg"
            >
            <source src="/videos/pot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p className="text-center text-base text-gray-400 italic">ADC input to system output</p>

        <p className="text-lg text-gray-300 leading-relaxed">
            The last major component was to put everything together and ensure the system worked with the two-axis machine. This involved testing the system and making adjustments to the code and speed values as necessary. The logic for this portion can be seen in the appendix section below.
        </p>
 
        
      </section>     

      {/* Final Design Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Final Design</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            The finished project was evaluated based on the percision of the movement of the two-axis machine to be able to go to a set target and the time it took to get there. Both of these criteria were found to be completed and recieved full marks. 
        </p>

        <video
            autoPlay
            loop
            muted
            playsInline
            className="flex justify-center pt-2 max-w-sm mx-auto rounded-lg object-cover shadow-lg"
            >
            <source src="/videos/tam.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        <p className="text-center text-base text-gray-400 italic">Horizontal movement charactersed by potentiometer input</p>

      </section>

      {/* Future Steps Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Future Steps</h2>
        
        <ul className="space-y-3 text-lg text-gray-300 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-white">•</span>
            <span>Implement a second ADC for simultaneous movement in the x and y direction</span>
          </li>
          
        </ul>
      </section>

      {/* Appendix Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Appendix</h2>
        
       

        <div className="flex justify-center pt-6">
            <Image
            src="/images/tamcode.png"
            height={600}
            width={600}
            alt="Two-Axis Machine Main Code"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
            />
        </div>
        
        <p className="text-center text-base text-gray-400 italic">Main System Code</p>

      </section>

    </article>
  </div>
</div>
      </main>
    </SidebarProvider>
  );
}