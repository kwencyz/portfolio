"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [projects] = useState([
    { title: "JustGo!", description: "This is my first project.", link: "#" },
    { title: "MyBukuPink", description: "This is my second project.", link: "#" },
    { title: "MAVeRT", description: "This is my third project.", link: "#" },
    { title: "EqLert", description: "This is my fourth project.", link: "#" },
    { title: "Plus (Demo)", description: "This is my fifth project.", link: "#" },
  ]);

  const images = [
    "/images/justgo.png",
    "/images/mavert.png",
    "/images/mybukupink.png"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">My Projects</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 border rounded-lg shadow-md transition duration-300 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="relative w-full h-80 mb-8 overflow-hidden rounded-lg shadow-lg">
        <Image src={images[currentImage]} alt="Slideshow" width={1200} height={500} className="w-full h-full object-cover" unoptimized />
        <button onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600">◀</button>
        <button onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600">▶</button>
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
  );
}