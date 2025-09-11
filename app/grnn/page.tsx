"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Home, Calendar} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkCard } from "@/components/link-preview";
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
                <BreadcrumbPage className="text-white">Geusture Recognition Neural Network</BreadcrumbPage>
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
                    src="/images/neuralnet.jpg" 
                    alt="Hand Gesture Recognition Neural Network"
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
                    Guesture Recognition Neural Network
                  </h1>
                </div>
                
                <p className="text-xl lg:text-2xl leading-relaxed">
                    Developed a machine learning model plugin to accuratly recognize hand guestures. Designed to be lightweight and efficient for real-time applications.  
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-{#E3DEE0}">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Jan 2025</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-2">
                
                {/* Industry */}
                <div>
                  <Badge variant="secondary" className="text-white">
                    Computer Vision
                  </Badge>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#B4A7AC]/30 to-transparent"></div>

                {/* Role */}
                <div className="text-[#E3DEE0]">
                  <span className="font-semibold text-white">Role:</span> Machine Learning
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-[#E3DEE0]/30 to-transparent"></div>

                {/* Key Focus Areas */}
                <div className="space-y-1">
                  <span className="text-white font-semibold block">Key Focus Areas:</span>
                  <p className="text-[#E3DEE0] leading-relaxed">
                    Machine Learning • Computer Vision • Python • Data Analysis
                  </p>
                </div>

                {/* External Links */}
                <div className="space-y-3 pt-2">
                  <ExternalLinkCard
                    title="GitHub"
                    description="Click here to view the project repository on GitHub."
                    url="https://github.com/IAnwar2/RecognizeGestures"
                  />
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
            The aim of this project was to develop an easy to use model that could be used to recognize hand gestures in real-time. 
            A goal for this project is to allow the user to be able to alter the codebase and retrain the model to recognize custom gestures.
        </p>
        
      </section>

      {/* Background Research Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Background Research and Design Decisions</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            To determine the best approach for this project, various machine learning models and architechtures were researched. 
            The first step was to decide what type of input data would be used. Since the goal of this project was to recognize hand gestures,
            it made sense to use image data as input. However, in order to allow the user to be able to create new gestures and retrain the model, a method of data collection that was simple to achieve was needed. 
            Therefore, rather than using raw images as input, it was decided to use hand landmark coordinates as input. This would allow the user to easily collect data of themselves performing the gestures they want to recognize.
            To achieve this, OpenCV and MediaPipe Hands were used to detect hand landmarks in real-time. This provided a set of 21 3D coordinates for each hand detected in the image. These coordinates could then be used as input to the machine learning model.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
            Now that the input data was determined, the next step was to decide on a model architechture. The first model that was researched was the Convolutional Neural Network (CNN). This type of model is commonly used for image classification which would have seemed fitting for this project. 
            However, since the data is no longer in image form, where spatial relationships between pixels are important, a CNN would not be the best choice. This is because in this dataset, each input feature (landmark coordinate) should have some relationship with every other input feature.
            To achieve better performance, a Fully Connected Neural Network (FCNN) was chosen instead. This type of model allows for every input feature to be connected to every output feature, allowing for more complex relationships to be learned. Furthermore, with the 21 landmarks each having 3 coordinates (x, y, z), the input layer would have 63 nodes
            which would mean that the FCNN would be lightweight and efficient, making it suitable for real-time applications, whereas a CNN would add unnecessary complexity without making use of its strengths.
        </p>

        <div className="flex justify-center pt-6">
          <Image
            src="/images/nn.png"
            height={600}
            width={600}
            alt="cnn vs fcnn"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <p className="text-center text-base text-gray-400 italic">How wieghts are distributed in a CNN vs FCNN</p>

      </section>

      {/* Initial Design & Iterations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Data Collection</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
            Using Opencv and Media Pipe Hands, CreateGestureData.py was created to collect hand landmark data and save it to a csv file. This is done by using the webcam to capture video frames in real-time. The user can press a button to indicate which gesture they are performing, and the corresponding hand landmark data is saved to the csv file.
            The user can perform multiple gestures and collect as much data as they want. The more data collected, the better the model will perform. Once the user is satisfied with the amount of data collected, they can stop the program and use the csv file to train the model.
        </p>

        {/* <div className="flex justify-center pt-6">
          <Image
            src="/images/.png"
            height={700}
            width={700}
            alt="Hand Landmark Data Collection Script"
            unoptimized
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <p className="text-center text-base text-gray-400 italic">Hand Landmark Data Collection Code</p> */}

      </section>     

      

      {/* Future Steps Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Future Steps</h2>
        
        <ul className="space-y-3 text-lg text-gray-300 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-white">• Integration with Rasberry Pi projects using the Pi camera</span>
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