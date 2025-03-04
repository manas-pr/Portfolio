import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <header className="text-center text-4xl font-bold mb-10">🚀 My Portfolio</header>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-gray-400">
          Hi, I'm [Your Name], a passionate developer specialized in modern web technologies.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium">🔹 Project 1</h3>
            <p className="text-gray-400">Description of project 1.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-medium">🔹 Project 2</h3>
            <p className="text-gray-400">Description of project 2.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p className="mt-2 text-gray-400">📧 Email: your.email@example.com</p>
        <p className="text-gray-400">🔗 <a href="https://linkedin.com/in/yourprofile" className="text-blue-400">LinkedIn</a></p>
        <p className="text-gray-400">🐙 <a href="https://github.com/yourgithub" className="text-blue-400">GitHub</a></p>
      </section>
    </div>
  );
}