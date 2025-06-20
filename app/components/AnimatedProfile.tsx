'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const roles = [
  "Software Engineer",
  "Open Source Contributor",
  "Problem Solver",
  "Researcher",
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
          }, 2000);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isWaiting, currentRoleIndex]);

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl mx-auto"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="w-64 h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-100 shadow-lg"
        variants={fadeInUp}
      >
        <Image 
          src="/omarraf.jpg?height=256&width=256" 
          alt="Omar R" 
          fill 
          className="object-cover" 
          priority 
        />
      </motion.div>

      <div className="flex-1 text-center md:text-left">
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          {name}
        </motion.h1>
        
        <motion.h2 
          className="text-2xl text-muted-foreground mb-6 min-h-[1.5em]"
          variants={fadeInUp}
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
          variants={fadeInUp}
        >
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
            Pursuing a bachelors in Computer Science at California State University, Fullerton.
             I'm interested in full-stack development and contributing to open source
          </p>
          <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
            In my free time I enjoy playing basketball, reading books, and learning new things. Feel free to reach out if you have any questions or want to collaborate on a project!
          </p>

          <motion.div 
            className="flex justify-center md:justify-start gap-4"
            variants={fadeInUp}
          >
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="mailto:omarrafiqq@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://github.com/omarraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
              <a href="https://linkedin.com/in/omarrafiq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
} 