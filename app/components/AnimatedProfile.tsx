'use client';

import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const nameVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const roles = [
  "Software Engineer",
  "Open Source Contributor",
  "Problem Solver",
  "Tech Enthusiast",
  
];

export function AnimatedProfile() {
  const name = "Omar Rafiq";
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && !isWaiting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, 2000); // Wait 2 seconds before starting to delete
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isWaiting, currentRoleIndex]);

  return (
    <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
      <motion.div 
        className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image src="/omarraf.jpg?height=192&width=192" alt="Omar R" fill className="object-cover" priority />
      </motion.div>

      <div className="flex-1">
        <motion.h1 
          className="text-4xl font-bold mb-2"
          variants={nameVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          {name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
              style={{ marginRight: letter === " " ? "0.3em" : "0" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2 
          className="text-xl text-muted-foreground mb-6 min-h-[1.5em]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </motion.h2>
        <motion.div 
          className="prose max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p>
            hello, im omar! I like to code, play basketball and read books. interested in AI/ML, full-stack development, and contributing to open source projects.
          </p>
          <p className="text-lg text-muted-foreground font-bold"> currently:</p>
          <ul className="list-disc list-inside">
              <li>
              doing research in human computer interaction and AI to track health and wellness
              </li>
              <li>
                contributing to open source projects like <a href="https://github.com/openenergydashboard " className="text-blue-500">Open Energy Dashboard </a> 
                and <a href="https://github.com/freecodecamp " className="text-blue-500">FreeCodeCamp</a>
              </li>
          </ul>
          <p className="text-lg text-muted-foreground font-bold"> previously:</p>
          <ul className="list-disc list-inside">
            <li>
              swe intern at <a href="https://themasjidapp.org/" className="text-blue-500">The Masjid App</a>
              <li>
                swe micro intern at CodeDay Labs
              </li>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
} 