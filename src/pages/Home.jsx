import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme toggler*/}
            <ThemeToggle />
            {/*Background Effects*/}
            <StarBackground />
            {/*Navbar*/}
            <Navbar />
            {/*Main Section*/}
            <main>
                <HeroSection/>
                <AboutSection/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
            {/*Footer*/}
        </div>
    )
}