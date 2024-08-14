"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    const skillLists = ['HTML5', 'CSS3', 'JavaScript', 'React.JS', 'Redux', 'Next.JS', 'TailWind CSS', 'Postgre SQL', 'GitHub']


    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-4 md:p-8 lg:p-12 xl:p-12 flex flex-col gap-20 md:gap-20 lg:gap-24 xl:gap-32 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-10 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="/nehaPic.png"
                            alt=""
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            Neha Sehgal is a passionate and skilled computer science professional, recently completed her graduation in Bachelor of Technology in Computer Science and Engineering from Dr. Akhilesh Das Gupta Institute of Professional Studies in New Delhi with a remarkable CGPA of 9.6. Her strong academic foundation was built at Arwachin Bharti Bhawan Senior Secondary School in Vivek Vihar, Delhi, where she excelled in both her high school and intermediate studies.
                            <br />
                            <br />
                            Neha gained valuable industry experience as a Trainee Intern at the Centre for Railway Information Systems (CRIS) in New Delhi, where she contributed to the computerization of coaching operations for Indian Railways. Her work involved managing day-to-day operational activities, maintaining computerized records, and generating crucial MIS reports to optimize resource utilization.
                            <br />
                            <br />
                            In addition to her internship, Neha has worked on several innovative technical projects. She developed an Electronic Voting System based on Blockchain Technology, aimed at enhancing electoral integrity and voter data security. She also created a Stress Detection System for IT Professionals, utilizing machine learning algorithms to monitor and reduce stress levels in the workplace.
                            <br />
                            <br />
                            Neha’s portfolio includes various web development projects. These projects demonstrate her proficiency in JavaScript, as well as her experience with frameworks like React and Redux and library like NextJS.
                        </p>

                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            With a deep foundation in computer science and a passion for innovative solutions, I strive to blend technical expertise in JavaScript, React, and NextJS with a commitment to excellence, driving impactful projects and continuous growth.
                        </span>
                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end">
                            <img src="/neha.png" alt="Signature" width="185" height="77" />
                        </div>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-3 flex-wrap"
                        >
                            {skillLists.map((lists) => <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black' key={lists}>{lists}</div>)}

                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-52">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-2 font-semibold rounded-b-lg rounded-s-lg text-center">
                                        Trainee Intern at CRIS
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-2 text-sm italic">
                                        Contributed to digitalizing railway operations, managing daily activities, maintaining records, and optimizing resources through MIS.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-2 text-red-400 text-sm font-semibold">
                                        Aug 2023 - Nov 2023
                                    </div>

                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-52">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-2 font-semibold rounded-b-lg rounded-s-lg text-center">
                                        React Developer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-2 text-sm italic">
                                        Led the development of React applications, utilizing advanced skills to create efficient and dynamic solutions.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-2 text-red-400 text-sm font-semibold">
                                        2023 - 2024{" "}
                                    </div>

                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-52">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-2 font-semibold rounded-b-lg rounded-s-lg text-center">
                                        Freelancer{" "}
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-2 text-sm italic">
                                        I provided web solutions, applying a range of technologies
                                        to address client requirements.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-2 text-red-400 text-sm font-semibold">
                                        2024 - Present{" "}
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;