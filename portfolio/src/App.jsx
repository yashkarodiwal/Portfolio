import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      {/* Header with Theme Toggle */}
      <header className="flex justify-end p-6">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        {/* Profile Avatar with Hover Zoom */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-6 transition-transform duration-300 hover:scale-105">
          <img
            src="/profile.jpg"
            alt="Yash Karodiwal"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
        >
          Hi, I’m Yash Karodiwal
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          A Computer Science student and passionate developer who enjoys building
          web applications, exploring new technologies, and solving real-world problems.
        </p>
        <div className="flex gap-6 mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yashkarodiwal03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={28} className="hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-karodiwal-b04199305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} className="hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/yashkarodiwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} className="hover:text-blue-600" />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-blue-600 mb-4">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {["C", "C++", "Java", "Python", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-blue-600 mb-4">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Databases */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-blue-600 mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-blue-600 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {["GitHub", "VS Code", "Postman", "XAMPP", "phpMyAdmin", "Netlify"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl text-blue-600">Online Learning Platform | MERN</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Full-stack e-learning platform with authentication, dashboards, live sessions, and payment integration.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yashkarodiwal/Online_Learning_Platform" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl text-blue-600">Feedback Collection System | MERN</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Dynamic feedback collection system with analytics, moderation tools, CSV export, and audit logging.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yashkarodiwal/Feedback_Collection_System" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl text-blue-600">Online Movie Streaming Application | MERN</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              MERN-based movie streaming site with APIs for category, name, random selection, and React integration.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yashkarodiwal/Movie_Streaming_Website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl text-blue-600">Library Management Website | PHP & MySQL</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Library website with form handling and backend storage using PHP, MySQL, and phpMyAdmin.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yashkarodiwal/Library_Website" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Experience</h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li><strong>Web Development Intern – Proxenix (Remote, 2025)</strong> | Led full-stack development of Online Learning Platform and Feedback Collection System.</li>
          <li><strong>MERN Development Intern – SKIT Jaipur (2024)</strong> | Led a 4-member team to build an Online Movie Streaming Application.</li>
          <li><strong>Web Development Intern – SKIT Jaipur (2023)</strong> | Built a library website with form handling via PHP and MySQL.</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Education</h2>
        <p><strong>B.Tech. in Computer Science & Engineering</strong> | Swami Keshvanand Institute of Technology, Jaipur, Rajasthan (2022–2026)</p>
        <p><strong>Senior Secondary (12th, CBSE)</strong> | Bakhshi’s Springdales Senior Secondary School, Kota, Rajasthan (2021)</p>
        <p><strong>Secondary (10th, CBSE)</strong> | Bakhshi’s Springdales Senior Secondary School, Kota, Rajasthan (2019)</p>
      </section>

      {/* Certifications Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>NPTEL: Python, Java, C++, C (2024–25)</li>
          <li>Spoken Tutorial IIT Bombay: JavaScript, Python, Java, Linux, Advanced Cpp (2023–25)</li>
          <li>Infosys Springboard Certifications</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 text-center mt-16 rounded-t-2xl shadow-xl">
        <p>© {new Date().getFullYear()} Yash Karodiwal | Built with React & Tailwind</p>
      </footer>
    </div>
  );
}
