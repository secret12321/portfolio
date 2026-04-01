import { Laptop, File } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "/img/moni.json";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-20 px-6 relative flex items-center min-h-screen"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Animation */}
          <div className="flex justify-center md:justify-start">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            />
          </div>

          {/* Right Side - Text & Buttons */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold">Hi! 👋</h3>

            <p className="text-xl font-semibold">
              I'm <span className="text-primary">Eliza Dizon</span>,
              <br /> Aspiring Virtual Assistant | Data Analysis • AI Ads • Canva Design • Website Development
            </p>

            <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                Aspiring Virtual Assistant skilled in Data Analysis, AI Ads, Canva Design, and Website Development. 
                I help businesses stay organized, make data-driven decisions, and create engaging online content. With a 
                mix of creativity, technical skills, and problem-solving, I deliver solutions that improve workflows and 
                grow your digital presence.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center md:items-start pt-4">
              {/* Download CV */}
              <a
                href="/eliza_dizon_resume_IT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button inline-flex items-center gap-2 mt-2 px-6 py-3 border border-primary rounded-md hover:bg-primary/10 transition duration-300"
              >
                <File className="h-5 w-5" />
                View Resume
              </a>

              {/* Get in Touch */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-md text-primary border border-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition duration-300"
              >
                <Laptop className="h-5 w-5" />
                <span className="relative inline-flex">
                  {"Get in Touch".split("").map((char, index) => (
                    <span
                      key={index}
                      className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}

                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
