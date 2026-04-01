import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-start justify-center pt-30 sm:pt-20 md:pt-24 px-4"
    >
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-xl overflow-hidden">

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Let's Work Together
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Profile */}
          <div className="flex justify-center order-1 md:order-2">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img
                  src="/img/Laptop.png"
                  alt="Eliza"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 w-full order-2 md:order-1 text-center md:text-left">

            {/* WhatsApp/Viber */}
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2">
                CALL ME AT WHATSAPP OR VIBER
              </p>
              <div className="flex items-center gap-3 bg-white/20 px-5 py-3 rounded-full w-full md:w-fit justify-center md:justify-start">
                <Phone size={20} />
                <span className="text-sm sm:text-base">+639765659850</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2">EMAIL ME AT</p>
              <div className="flex items-center gap-3 bg-white/20 px-5 py-3 rounded-full w-full md:w-fit justify-center md:justify-start">
                <Mail size={20} />
                <span className="text-sm sm:text-base">dizoneliza074@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm sm:text-base font-semibold mb-2">MY SOCIAL MEDIA ACCOUNT</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {/* Facebook */}
                <div className="flex items-center gap-2 bg-white/20 px-5 py-3 rounded-full w-fit">
                  <Facebook size={20} />
                  <a
                    href="https://www.facebook.com/eli.flakes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:underline"
                  >
                    Eli Dizon
                  </a>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-2 bg-white/20 px-5 py-3 rounded-full w-fit">
                  <Instagram size={20} />
                  <a
                    href="https://www.instagram.com/zadizon12321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base hover:underline"
                  >
                    zadizon12321
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-3 right-4 w-4 h-4 md:w-6 md:h-6 bg-white/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 md:w-10 md:h-10 bg-white/20 rounded-full blur-md"></div>
      
      </div>
    </section>
  );
};
