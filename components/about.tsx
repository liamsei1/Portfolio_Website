"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const ref = useSectionInView("About");

  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center 
    leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay:0.175, }}
    id="about">
    
        <SectionHeading children="About me"/>

        <p className='mb-3'>
            I started programming at school in the{" "}
            <span className="font-medium">software development</span> class. I wanted to deepen 
            my knowledge of programming, so I enrolled in a{" "}
            <span className="font-medium">first degree</span> in computer science, as part of "Etgar" program.{" "}
            <span className="italic">I <span className="underline">love</span> to create
             an algorithm to a problem, and then implement this as a code</span>. I have knowledge in:{" "}
            <span className="font-medium">
            React, Next.js, MySql, ASP.NET, TailWind, Maven, Javafx
            </span>
            . I am also familiar with <span className="font-medium">OOP, Threading, Design Patterns</span>
            . I am always looking to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
        </p>

        <p>
            <span className="italic">In my daily life</span>, I train in {" "}
            <span className="font-medium">powerlifting</span> and <span className="font-medium">arm wrestling</span>
             . I also enjoy{" "}
            <span className="font-medium">reading books</span> and {" "}
            <span className="font-medium">learning new things</span>.
        </p>

    </motion.section>
  )
}
