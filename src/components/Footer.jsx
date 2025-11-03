import React from 'react';
import { Facebook, Twitter, Rss, Dribbble } from 'lucide-react';
import { motion } from 'framer-motion';
import BottomBar from './BottomBar';


export default function Footer() {
  return (
    <>
      <footer className="bg-[#8dcb3f] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Location Section */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <p className="leading-relaxed">
                Collins Street West, Victoria 8007 Australia<br />
                T. (208) 333 9296<br />
                E. contact@baresto.com
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block">
                <motion.div
                  className="bg-[#000000]rounded-full w-32 h-32 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/logo2.jpg" // Replace with your image path
                    alt="Logo"
                    className="w-28 h-28 object-cover rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Social Icons Section */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              
              {/* <div className="flex justify-center lg:justify-start  gap-1">
                <motion.a
                  href="https://www.facebook.com/Tea5cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={20} />
                </motion.a>

                <motion.a
                  href="https://x.com/Tea5cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="Twitter (X)"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} />
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@Tea5cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="RSS"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Rss size={20} />
                </motion.a>

                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="Google Plus"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </motion.a>

                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="Skype"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                    <path d="M8 12h8" />
                  </svg>
                </motion.a>

                <motion.a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#18191b] rounded transition-colors"
                  aria-label="Dribbble"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Dribbble size={20} />
                </motion.a>
              </div> */}

            </motion.div>
          </div>
        </div>
        <BottomBar />
      </footer>
    </>
  );
}