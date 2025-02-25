"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [projects, setProjects] = useState([
    { title: "Project One", description: "This is my first project.", link: "#" },
    { title: "Project Two", description: "This is my second project.", link: "#" },
    { title: "Project Three", description: "This is my third project.", link: "#" },
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
        <h1 className="text-2xl font-bold">My Projects</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 border rounded transition duration-300 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="relative w-full h-64 mb-6">
        <Image src={images[currentImage]} alt="Slideshow" width={800} height={400} className="w-full h-full object-cover rounded" unoptimized />
        <button onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded">◀</button>
        <button onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded">▶</button>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className={`p-4 border rounded transition duration-300 ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-gray-100"}`}>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="mt-2 inline-block text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
