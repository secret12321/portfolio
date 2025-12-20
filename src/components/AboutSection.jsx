import { motion } from "framer-motion";


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative flex items-center justify-center">
        <div className="container mx-auto ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
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
                        Detail-oriented and reliable professional with experience in administrative support, data management, and digital tools. 
                        Highly organized and efficient, with a strong ability to manage tasks, maintain accurate records, and streamline 
                        workflows in fast-paced environments.

                    </p>
                    <p className="text-lg text-muted-foreground">
                        With a strong interest in technology, I have hands-on experience using HTML, CSS, JavaScript, and PHP, as well as modern 
                        tools and frameworks like React and Tailwind CSS. I am adaptable, quick to learn, and comfortable working with both 
                        technical and non-technical tasks. I enjoy solving problems, supporting business operations, and continuously improving 
                        my skills to deliver high-quality results.
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