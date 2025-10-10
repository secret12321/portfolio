import { motion } from "framer-motion";
import htmlLogo from "/img/html.png";
import cssLogo from "/img/css.png";
import phpLogo from "/img/php.png";
import jsLogo from "/img/js.png";
import reactLogo from "/img/react.png";
import tailwindLogo from "/img/tailwind.png";
import codeigniterLogo from "/img/codeigniter.png";
import bootstrapLogo from "/img/bootstrap.png";
import mysqlLogo from "/img/mysql.png";
import figmaLogo from "/img/figma.png";
import wordpressLogo from "/img/wordpress.png";

export const Skills = () => {
  const languages = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "PHP", logo: phpLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwind", logo: tailwindLogo },
    { name: "CodeIgniter", logo: codeigniterLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Figma", logo: figmaLogo },
    { name: "WordPress", logo: wordpressLogo },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Skills
        </h2>

        <div className="overflow-hidden whitespace-nowrap flex">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                }}
                className="flex items-center"
            >
                {[...languages, ...languages].map((lang, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-white/10 rounded-2xl p-4 mx-4 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 min-w-[130px]"
                >
                    <img
                    src={lang.logo}
                    alt={lang.name}
                    className="w-16 h-16 object-contain mb-2" // 🖼 Slightly bigger logos
                    />
                    <span className="text-lg font-semibold tracking-wide">
                    {lang.name}
                    </span>
                </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};
