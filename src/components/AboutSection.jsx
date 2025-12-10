import { motion } from "framer-motion";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative flex items-center justify-center">
        <div className="container mx-auto ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
                <div>
                    {/* <motion.img
                        src="/img/rob.gif"
                        alt="Web Designer"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-80"
                    /> */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ y: 0 }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        >
                        {/* <motion.img
                            src="/img/talk.jpg"
                            alt="Eliza working on web design"
                            className="w-64 md:w-80 lg:w-96 rounded-2xl shadow-lg"
                            transition={{ type: "spring", stiffness: 100 }}
                        /> */}
                        <motion.img
                            src="/img/talk.jpg"
                            alt="Eliza working on web design"
                            className="w-64 md:w-80 lg:w-96 rounded-2xl shadow-lg"
                            transition={{ type: "spring", stiffness: 100 }}
                        />
                    </motion.div>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        {/* Who I Am */}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                        A self-taught web developer and designer with a strong passion for building modern and responsive websites.
                        I specialize in creating clean, user-friendly designs that focus on functionality and great user experience.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        I’ve learned through hands-on projects, online resources, and continuous practice — exploring everything from HTML, CSS, JavaScript, and PHP to modern frameworks like React and Tailwind CSS.
                        Even though I’m still learning, I’m always eager to expand my skills, stay updated with new technologies, and apply what I learn to real-world projects.
                    </p>
                    {/* <p className="text-lg text-muted-foreground">
                        I believe that great design is not just about making things look good but also about solving problems and enhancing usability. I enjoy collaborating with clients to understand their vision and translate it into a digital experience that resonates with their audience.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        When I'm not coding or designing, I love exploring new technologies, staying updated with industry trends, and continuously learning to improve my craft. I'm excited to take on new challenges and contribute to projects that make a difference.
                    </p> */}
                </div>
                
            </div>
        </div>
    </section>
};