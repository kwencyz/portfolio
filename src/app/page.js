"use client";
import { useEffect, useRef, useState } from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const logoRef = useRef(null);
  const [morphed, setMorphed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMorphed(true);
      } else {
        setMorphed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [projects] = useState([
    { title: "JustGo!", description: "This is my first project.", link: "#" },
    { title: "MyBukuPink", description: "This is my second project.", link: "#" },
    { title: "MAVeRT", description: "This is my third project.", link: "#" },
    { title: "EqLert", description: "This is my fourth project.", link: "#" },
    { title: "Plus (Demo)", description: "This is my fifth project.", link: "#" },
  ]);

  return (
    <ParallaxProvider>
      <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <ParallaxBanner
          layers={[
            { image: '/static/banner-background.jpg', speed: -20 },
            { image: '/static/banner-foreground.png', speed: -10 }
          ]}
          className="aspect-[2/1] relative mb-8"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Welcome to My Portfolio</h1>
          </div>
        </ParallaxBanner>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-wide">My Projects</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 border rounded-lg shadow-md transition duration-300 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className={`p-6 border rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-gray-100"}`}>
              <h2 className="text-2xl font-semibold tracking-wide">{project.title}</h2>
              <p className="mt-2 text-lg">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-400 hover:underline text-lg font-medium">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
}