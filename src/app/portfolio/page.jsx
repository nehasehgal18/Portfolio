"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 11,
        color: "from-pink-500 to-red-500",
        title: 'Every project is a problem solved. Scroll to explore the solutions',
        desc: "",
        img: "/scroll.png",
        link: "",

    },
    {
        id: 9,
        color: "from-pink-500 to-red-500",
        title: "Blockchain based E-Voting System",
        desc: "A Python-based machine learning project using OpenCV for facial recognition and scikit-learn for classification, designed to enhance the voting process through intelligent automation and verification. Features real-time face capture, data preprocessing, model training, and a command-line interface for simulating a voting process.",
        img: "/voting.png",
        link: "https://github.com/nehasehgal18/SmartElectionsPythonML",
    },
    {
        id: 12,
        color: "from-red-500 to-orange-500",
        title: "Stress Detection with Real-Time Emotions",
        desc: "Developed a real-time emotion and stress detection system using machine learning and webcam facial analysis. Implemented a model to classify emotions like anger, fear, and sadness, categorizing stress levels accordingly. Leveraged Python, OpenCV, and Keras for model training and real-time emotion detection, offering personalized activity suggestions based on user stress levels. Ensured smooth performance and responsiveness for real-time interaction.",
        img: "/stress.jpg",
        link: "https://github.com/nehasehgal18/Stress_Detection",
    },
    {
        id: 8,
        color: "from-pink-300 to-red-300",
        title: "Pizza Data Analysis",
        desc: "Performed exploratory data analysis on pizza sales data using Python libraries such as pandas, Matplotlib, and Seaborn. The project highlighted key metrics including sales distribution by category and size, peak ordering times, and best-selling pizzas. Visualizations were used to derive actionable insights for boosting sales and optimizing inventory.",
        img: "/pizza.png",
        link: "https://github.com/nehasehgal18/Pizza_DATA_ANALYSIS",
    },
    {
        id: 7,
        color: "from-pink-400 to-red-400",
        title: "Ola Data Analysis",
        desc: "Performed in-depth analysis of Ola ride data using Python (pandas, NumPy, Matplotlib, Seaborn). Cleaned and explored data to identify patterns in ride frequency, peak hours, and cancellations. Created visualizations to uncover customer behavior and demand trends, offering insights to enhance efficiency and user experience.",
        img: "/ola.png",
        link: "https://github.com/nehasehgal18/Ola_DATA_ANALYSIS",
    },
    {
        id: 6,
        color: "from-pink-500 to-red-500",
        title: "E-Commerce Data Analysis",
        desc: "Conducted comprehensive analysis on e-commerce transactional data using Python libraries such as pandas, NumPy, and Matplotlib. Performed data cleaning, exploratory data analysis, and visualization to uncover insights into customer behavior, sales trends, and product performance. Identified key metrics influencing revenue and provided actionable recommendations to enhance business strategies.",
        img: "/ecommerce.png",
        link: "https://github.com/nehasehgal18/E-Commerce-Data-Analysis-/blob/main/E-Commerce(Data%20analyst).ipynb",
    },
    {
        id: 1,
        color: "from-red-300 to-orange-300",
        title: "Countries API",
        desc: "Developed a dynamic web application by integrating external RESTful APIs to fetch and display country-specific data. Utilized JavaScript to handle API requests, process responses, and update the DOM. Implemented search functionality, filtering options, and dark mode. Added robust error handling, conducted cross-browser testing, and optimized performance for faster load times.",
        img: "/CountryApi.png",
        link: "https://nehasehgal18.github.io/APICountry/",
    },
    {
        id: 10,
        color: "from-red-600 to-orange-600",
        title: "Shopping E-Commerce",
        desc: "Built a responsive e-commerce website with interactive features like product filtering, sorting, and a custom person clipart for enhanced visuals. Utilized HTML, CSS, and JavaScript for dynamic content and optimized performance. Ensured cross-browser compatibility and added a dark mode option for a better user experience.",
        img: "/shop.png",
        link: "https://nehasehgal18.github.io/E-CommerceWebsite/",
    },
    {
        id: 5,
        color: "from-red-400 to-orange-400",
        title: "TO-DO APP",
        desc: "Developed a responsive To-Do app using React, incorporating essential features such as task addition, deletion, and real-time status updates. The app boasts a clean and intuitive user interface, ensuring a seamless experience for users. I focused on optimizing both performance and usability by implementing responsive design principles.",
        img: "/todo.png",
        link: "https://nehasehgal18.github.io/To-Do-App-React/",
    },
    {
        id: 2,
        color: "from-orange-300 to-yellow-300",
        title: "`Focus on Today` Application",
        desc: "Developed a web application focused on helping users set, track, and complete daily goals, fostering productivity and personal growth. The application features a goal-setting and tracking interface, progress indicators, and motivational quotes. Designed and implemented the user interface, integrated goal-tracking functionality, and ensured a responsive design.",
        img: "/Focuss.png",
        link: "https://nehasehgal18.github.io/FocusOnToday/",
    },
    {
        id: 3,
        color: "from-orange-400 to-yellow-400",
        title: "Number Guessing Game",
        desc: "Created an interactive number guessing game to entertain users with a fun challenge. The game includes random number generation, user input handling, feedback on guesses, and score tracking. Developed the game logic, designed the user interface, and implemented scoring and feedback mechanisms.",
        img: "/Game.png",
        link: "https://nehasehgal18.github.io/GuessGameJS/",
    },
    {
        id: 4,
        color: "from-yellow-300 to-amber-300",
        title: "‘The Shoe Company’ E-Commerce Website",
        desc: "Developed a responsive e-commerce website for The Shoe Company using HTML and CSS. Ensured cross-browser compatibility and responsive design across various devices. Created an intuitive shopping experience with interactive elements and optimized website performance for fast loading times and smooth user interaction.",
        img: "/Shoe.png",
        link: "https://nehasehgal18.github.io/TheShoeCompany/",
    },
    {
        id: 3,
        color: "from-orange-400 to-yellow-400",
        title: "Foody Ham-Burger",
        desc: "Developed a modern and visually engaging restaurant landing page to showcase a burger brand with style and interactivity. The project features dynamic UI components and responsive design. Designed the interface, structured the layout using semantic HTML, and styled elements with CSS for an appealing, brand-aligned look. Integrated hover effects to increase interactivity and user engagement.",
        img: "/burger.png",
        link: "https://nehasehgal18.github.io/Foody_HamBurger/",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-4 text-white">
                                    <h1 className="text-md font-bold md:text-lg lg:text-xl xl:text-2xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[200px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:text-md lg:text-lg bg-white text-gray-600 font-semibold rounded">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center text-center">
                <h1 className="text-5xl">Do you have any project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[400px] md:h-[400px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Data Analyst and Front-end Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;