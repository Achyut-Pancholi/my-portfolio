import './App.css';
import profilePic from './profile.png';
// // Ensure Webpack includes the image
// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Github, 
//   Linkedin, 
//   Mail, 
//   ExternalLink, 
//   Code2, 
//   Brain, 
//   Cpu, 
//   Globe, 
//   Database,
//   Terminal, 
//   Menu, 
//   X, 
//   Upload,
//   Trophy,
//   Trash2,
//   Calendar,
//   MapPin,
//   Pencil,
//   Save,
//   RefreshCw
// } from 'lucide-react';

// // --- DATA ---

// const initialPersonalInfo = {
//   name: "Achyut Pancholi",
//   title: "AI & Machine Learning Engineer | Full Stack Developer",
//   tagline: "Bridging the gap between theoretical AI models and real-world applications.",
//   email: "achyutpancholi21@gmail.com",
//   location: "Bhilwara, Rajasthan, India",
//   github: "https://github.com/Achyut-Pancholi",
//   linkedin: "https://linkedin.com/in/achyut-pancholi-b6700b265",
//   about: "I am a Computer Science undergraduate specializing in Artificial Intelligence. My work ranges from building autonomous agents (LangFlow/n8n) to deploying scalable ML models on Azure. I am also proficient in Full Stack Web Development and Blockchain, allowing me to build complete, end-to-end systems."
// };

// const experience = [
//   {
//     role: "AIML Engineer Intern",
//     company: "Xebia",
//     date: "Jun 2025 - Jul 2025",
//     desc: "Built Salary Predictor & Disease Detection models. Deployed Streamlit apps on Azure. Mastered CNNs & EDA.",
//     tags: ["Azure", "ML", "Streamlit"]
//   },
//   {
//     role: "Machine Learning Engineer Intern",
//     company: "LaunchED",
//     date: "Feb 2025 - Apr 2025",
//     desc: "Focus on GenAI & Prompt Engineering. Created multi-modal tools utilizing NLP and React integration.",
//     tags: ["GenAI", "NLP", "React"]
//   }
// ];

// const achievements = [
//   { title: "Runner-up: Smart Library System (IoT)", event: "CVMU Hackathon 2024", icon: Cpu },
//   { title: "Runner-up: Ideathon 2025", event: "FIU USA", icon: Globe },
//   { title: "Participant: Blockchain Verification", event: "Smart India Hackathon 2024", icon: Database },
//   { title: "Academic Excellence (CGPA: 8.1)", event: "Sir Padampat Singhania University", icon: Trophy }
// ];

// // Complete Project List from GitHub + Resume
// const initialProjects = [
//   {
//     id: 1,
//     title: "Flowbit: AI Orchestration",
//     category: "AI Agents",
//     description: "Autonomous system using LangFlow & n8n to parse emails, classify attachments (JSON/PDF), and trigger workflows via Gmail API.",
//     tech: ["LangFlow", "n8n", "Python", "Gmail API"],
//     link: "https://github.com/Achyut-Pancholi",
//     featured: true
//   },
//   {
//     id: 2,
//     title: "RL Smart Timetable",
//     category: "AI & ML",
//     description: "Reinforcement Learning system that generates conflict-free, optimized class schedules based on constraints and preferences.",
//     tech: ["Reinforcement Learning", "Python", "Optimization"],
//     link: "https://github.com/Achyut-Pancholi/RL-Powered-Smart-Timetable-Generator",
//     featured: true
//   },
//   {
//     id: 3,
//     title: "Real-Time Disaster Detection",
//     category: "AI & ML",
//     description: "Computer vision system detecting disasters (fire, flood) in real-time video streams to aid emergency response.",
//     tech: ["Computer Vision", "Deep Learning", "OpenCV"],
//     link: "https://github.com/Achyut-Pancholi/Real-Time-Disaster-Detection",
//     featured: true
//   },
//   {
//     id: 4,
//     title: "Blockchain Doc Verification",
//     category: "Blockchain",
//     description: "Tamper-proof document verification using Solidity smart contracts, IPFS storage, and AI-OCR for data extraction.",
//     tech: ["Solidity", "Ether.js", "IPFS", "React", "OCR"],
//     link: "https://github.com/Achyut-Pancholi/Document-Verification-Blockchain",
//     featured: true
//   },
//   {
//     id: 5,
//     title: "PathGenie Ecosystem",
//     category: "AI & ML",
//     description: "AI-driven career path recommendation engine. Uses ML clustering to map optimal learning trajectories for users.",
//     tech: ["Streamlit", "Scikit-learn", "Pandas"],
//     link: "https://github.com/Achyut-Pancholi/PathGenie_App",
//     featured: false
//   },
//   {
//     id: 6,
//     title: "AI Excuse Generator",
//     category: "Generative AI",
//     description: "Multi-modal GenAI tool creating personalized excuses with fake audio and document 'proof'.",
//     tech: ["NLP", "Hugging Face", "React", "Audio Synthesis"],
//     link: "https://github.com/Achyut-Pancholi/AI-Excuse-Generator",
//     featured: false
//   },
//   {
//     id: 7,
//     title: "Lung Cancer Predictor",
//     category: "AI & ML",
//     description: "Predictive model diagnosing lung cancer risk from medical features using classification algorithms.",
//     tech: ["Machine Learning", "Jupyter", "Healthcare AI"],
//     link: "https://github.com/Achyut-Pancholi/Lung_Cancer-Predictor",
//     featured: false
//   },
//   {
//     id: 8,
//     title: "Prompt Engineering App",
//     category: "Generative AI",
//     description: "Utility tool for crafting, testing, and optimizing prompts for Large Language Models (LLMs).",
//     tech: ["LLMs", "Python", "Prompt Eng."],
//     link: "https://github.com/Achyut-Pancholi/Prompt_Enginnerig_APP",
//     featured: false
//   },
//   {
//     id: 9,
//     title: "Campus Event Manager",
//     category: "Full Stack",
//     description: "Role-based platform for university event organization, scheduling, and student registrations.",
//     tech: ["React", "Node.js", "SQL", "Express"],
//     link: "https://github.com/Achyut-Pancholi/Campus-Event-Management",
//     featured: false
//   },
//   {
//     id: 10,
//     title: "Smart Library System",
//     category: "IoT",
//     description: "IoT-enabled book tracking system using sensors. Runner-up at CVMU Hackathon.",
//     tech: ["IoT", "C++", "Sensors", "Cloud"],
//     link: "https://github.com/Achyut-Pancholi",
//     featured: false
//   },
//   {
//     id: 11,
//     title: "Aerofit EDA App",
//     category: "Data Science",
//     description: "Exploratory Data Analysis dashboard for fitness product data, providing visual insights and summaries.",
//     tech: ["Python", "Pandas", "Seaborn", "Streamlit"],
//     link: "https://github.com/Achyut-Pancholi/aerofit_eda_app",
//     featured: false
//   },
//   {
//     id: 12,
//     title: "Diabetes Predictor",
//     category: "AI & ML",
//     description: "Healthcare ML model predicting diabetes likelihood based on diagnostic measurements.",
//     tech: ["Scikit-learn", "Python", "Classification"],
//     link: "https://github.com/Achyut-Pancholi/Diabetese_Predictor",
//     featured: false
//   },
//   {
//     id: 13,
//     title: "Movie Sentiment Analysis",
//     category: "NLP",
//     description: "NLP pipeline performing sentiment classification on movie reviews using vectorization and ML models.",
//     tech: ["NLP", "NLTK", "Text Processing"],
//     link: "https://github.com/Achyut-Pancholi/Movie-Review-Sentiment-Analysis",
//     featured: false
//   },
//   {
//     id: 14,
//     title: "Titanic Survival",
//     category: "Data Science",
//     description: "Classic ML classification project predicting passenger survival rates with extensive feature engineering.",
//     tech: ["Data Science", "Kaggle", "Python"],
//     link: "https://github.com/Achyut-Pancholi/titanic_survival_prediction",
//     featured: false
//   },
//   {
//     id: 15,
//     title: "Customer Clustering",
//     category: "Data Science",
//     description: "Unsupervised learning project using K-Means to segment customers for targeted marketing strategies.",
//     tech: ["Clustering", "K-Means", "Analytics"],
//     link: "https://github.com/Achyut-Pancholi/customerclusterprediction",
//     featured: false
//   },
//   {
//     id: 16,
//     title: "Salary Predictor",
//     category: "AI & ML",
//     description: "Regression model estimating salaries based on years of experience, education, and location.",
//     tech: ["Regression", "Python", "Data Analysis"],
//     link: "https://github.com/Achyut-Pancholi/Salary-Predictor",
//     featured: false
//   },
//   {
//     id: 17,
//     title: "Quiz Form Filler",
//     category: "Automation",
//     description: "JavaScript automation script designed to auto-populate form fields and quizzes for testing purposes.",
//     tech: ["JavaScript", "DOM Manipulation", "Automation"],
//     link: "https://github.com/Achyut-Pancholi/Quiz_form_filler",
//     featured: false
//   },
//   {
//     id: 18,
//     title: "Temperature Prediction",
//     category: "AI & ML",
//     description: "Time-series forecasting project to predict future temperature trends based on historical weather data.",
//     tech: ["Time Series", "Python", "Forecasting"],
//     link: "https://github.com/Achyut-Pancholi/temprature_prediction",
//     featured: false
//   }
// ];

// // --- COMPONENTS ---

// const NavLink = ({ href, children, mobile, onClick }) => (
//   <a 
//     href={href} 
//     onClick={onClick}
//     className={`${mobile ? 'block py-3 text-lg border-b border-slate-800' : 'text-sm font-medium'} text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider`}
//   >
//     {children}
//   </a>
// );

// const SectionTitle = ({ title, subtitle }) => (
//   <div className="mb-12 text-center">
//     <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//       {title}<span className="text-cyan-500">.</span>
//     </h2>
//     {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
//     <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full mx-auto mt-4"></div>
//   </div>
// );

// const ProjectCard = ({ project, onRemove }) => (
//   <div className="group relative bg-slate-800/40 border border-slate-700/60 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full backdrop-blur-sm">
    
//     {/* Remove Button (Visible on Hover) */}
//     <button 
//       onClick={(e) => { e.stopPropagation(); onRemove(project.id); }}
//       className="absolute top-2 right-2 z-20 p-2 bg-red-500/10 text-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
//       title="Remove from portfolio view"
//     >
//       <Trash2 size={16} />
//     </button>

//     <div className="p-6 flex flex-col h-full">
//       <div className="flex justify-between items-start mb-4">
//         <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${
//           project.category.includes('AI') ? 'bg-violet-500/10 text-violet-300 border-violet-500/20' :
//           project.category.includes('Web') || project.category.includes('Full') ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' :
//           'bg-slate-700/30 text-slate-300 border-slate-600'
//         }`}>
//           {project.category}
//         </span>
//         <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
//           <Github size={20} />
//         </a>
//       </div>
      
//       <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
//         {project.title}
//       </h3>
      
//       <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
//         {project.description}
//       </p>
      
//       <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
//         {project.tech.map((t, i) => (
//           <span key={i} className="text-[10px] font-mono text-slate-300 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
//             {t}
//           </span>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const UploadAvatar = ({ image, onUpload }) => {
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       onUpload(imageUrl);
//     }
//   };

//   return (
//     <div className="relative group w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0 mb-8 md:mb-0 flex-shrink-0 cursor-pointer" onClick={() => fileInputRef.current.click()}>
//       <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-cyan-500 transition-all duration-300 shadow-2xl bg-slate-900 flex items-center justify-center relative z-10">
//         {image ? (
//           <img src={image} alt="Profile" className="w-full h-full object-cover" />
//         ) : (
//           <div className="text-center p-4">
//              <Upload className="mx-auto text-slate-600 mb-2 group-hover:text-cyan-400 transition-colors" size={32} />
//              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block">Upload Photo</span>
//           </div>
//         )}
//       </div>
//       {/* Glow Effect */}
//       <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
//       <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
//     </div>
//   );
// };

// export default function Portfolio() {
//   const [editableInfo, setEditableInfo] = useState(initialPersonalInfo);
//   const [isEditing, setIsEditing] = useState(false);
//   const [projects, setProjects] = useState(initialProjects);
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileImage, setProfileImage] = useState(profilePic);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleRemoveProject = (id) => {
//     setProjects(prev => prev.filter(p => p.id !== id));
//   };

//   const handleResetProjects = () => {
//     setProjects(initialProjects);
//   };
  
//   const handleInfoChange = (field, value) => {
//     setEditableInfo(prev => ({ ...prev, [field]: value }));
//   };

//   const categories = ['All', 'AI Agents', 'AI & ML', 'Generative AI', 'Full Stack', 'IoT', 'Blockchain', 'Data Science'];
  
//   const filteredProjects = activeFilter === 'All' 
//     ? projects 
//     : projects.filter(p => p.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      
//       {/* --- NAVBAR --- */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-lg border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           <a href="#" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
//             <Terminal size={24} className="text-cyan-500" />
//             Achyut<span className="text-slate-600">.dev</span>
//           </a>
          
//           <div className="hidden md:flex gap-8 items-center">
//             <NavLink href="#about">About</NavLink>
//             <NavLink href="#skills">Skills</NavLink>
//             <NavLink href="#projects">Projects ({projects.length})</NavLink>
//             <NavLink href="#achievements">Awards</NavLink>
//             <a href={`mailto:${editableInfo.email}`} className="px-5 py-2 bg-cyan-500 text-slate-900 hover:bg-cyan-400 hover:text-white rounded-full transition-all text-sm font-bold shadow-lg shadow-cyan-500/50">
//               Hire Me (Email)
//             </a>
//           </div>

//           <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
//             {menuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19] border-b border-slate-800 p-6 flex flex-col gap-2 shadow-2xl z-50">
//             <NavLink href="#about" mobile onClick={() => setMenuOpen(false)}>About</NavLink>
//             <NavLink href="#projects" mobile onClick={() => setMenuOpen(false)}>Projects</NavLink>
//             <NavLink href="#skills" mobile onClick={() => setMenuOpen(false)}>Skills</NavLink>
//             <NavLink href="#achievements" mobile onClick={() => setMenuOpen(false)}>Achievements</NavLink>
//           </div>
//         )}
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-800/50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
//         {/* Edit Button */}
//         <button 
//             onClick={() => setIsEditing(!isEditing)}
//             className={`absolute top-24 right-6 md:top-36 md:right-16 z-40 p-3 rounded-full transition-all ${isEditing ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-slate-800 text-cyan-400 hover:bg-slate-700'}`}
//             title={isEditing ? "Save Changes" : "Edit Profile"}
//         >
//             {isEditing ? <Save size={20} /> : <Pencil size={20} />}
//         </button>

//         {/* Abstract Background Blobs */}
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center gap-16">
            
//             <div className="flex-1 text-center md:text-left order-2 md:order-1">
//                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-bold mb-8 uppercase tracking-wider">
//                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
//                  Available for immediate joining
//                </div>
               
//                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//                  Hello, I'm <br />
//                  {isEditing ? (
//                     <input
//                         type="text"
//                         value={editableInfo.name}
//                         onChange={(e) => handleInfoChange('name', e.target.value)}
//                         className="text-white bg-slate-700/50 p-2 rounded w-full text-5xl md:text-7xl font-bold border border-cyan-500"
//                     />
//                  ) : (
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
//                       {editableInfo.name}
//                     </span>
//                  )}
//                </h1>
               
//                <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-8 max-w-2xl">
//                  {isEditing ? (
//                     <input
//                         type="text"
//                         value={editableInfo.title}
//                         onChange={(e) => handleInfoChange('title', e.target.value)}
//                         className="text-slate-400 bg-slate-700/50 p-2 rounded w-full border border-cyan-500"
//                     />
//                  ) : (
//                     editableInfo.title
//                  )}
//                </h2>
               
//                <p className="text-slate-500 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed text-lg">
//                  {isEditing ? (
//                     <textarea
//                         value={editableInfo.tagline}
//                         onChange={(e) => handleInfoChange('tagline', e.target.value)}
//                         className="text-slate-500 bg-slate-700/50 p-2 rounded w-full border border-cyan-500 min-h-[100px]"
//                     />
//                  ) : (
//                     editableInfo.tagline
//                  )}
//                </p>
               
//                <div className="flex flex-wrap justify-center md:justify-start gap-4">
//                  <a href="#projects" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:translate-y-[-2px] flex items-center gap-2">
//                    <Code2 size={20} /> Browse Portfolio
//                  </a>
//                  <a href={editableInfo.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#1e293b] hover:bg-[#334155] text-white font-bold rounded-lg transition-all border border-slate-700 flex items-center gap-2">
//                    <Github size={20} /> GitHub Profile
//                  </a>
//                </div>
//             </div>

//             <div className="md:w-auto flex flex-col items-center order-1 md:order-2">
//                <UploadAvatar image={profileImage} onUpload={setProfileImage} />
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* --- ABOUT --- */}
//       <section id="about" className="py-20 bg-[#0B0F19]">
//         <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
//           <div className="space-y-6">
//             <h3 className="text-2xl font-bold text-white flex items-center gap-3">
//               <Brain className="text-violet-500" /> About Me
//             </h3>
            
//             {isEditing ? (
//                 <textarea
//                     value={editableInfo.about}
//                     onChange={(e) => handleInfoChange('about', e.target.value)}
//                     className="text-slate-400 bg-slate-700/50 p-3 rounded w-full border border-cyan-500 min-h-[200px]"
//                 />
//             ) : (
//                 <p className="text-slate-400 leading-relaxed text-lg">
//                     {editableInfo.about}
//                 </p>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
//                <div className="flex items-center gap-3 text-slate-400">
//                  <MapPin className="text-cyan-500" size={18} /> 
//                  {isEditing ? (
//                     <input
//                         type="text"
//                         value={editableInfo.location}
//                         onChange={(e) => handleInfoChange('location', e.target.value)}
//                         className="text-slate-400 bg-slate-700/50 p-1 rounded w-full text-sm border border-cyan-500"
//                     />
//                  ) : (
//                     editableInfo.location
//                  )}
//                </div>
//                <div className="flex items-center gap-3 text-slate-400">
//                  <Mail className="text-cyan-500" size={18} /> 
//                  {isEditing ? (
//                     <input
//                         type="email"
//                         value={editableInfo.email}
//                         onChange={(e) => handleInfoChange('email', e.target.value)}
//                         className="text-slate-400 bg-slate-700/50 p-1 rounded w-full text-sm border border-cyan-500"
//                     />
//                  ) : (
//                     editableInfo.email
//                  )}
//                </div>
//             </div>
//           </div>

//           <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800">
//             <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
//             <div className="space-y-8">
//                {experience.map((exp, idx) => (
//                  <div key={idx} className="relative pl-6 border-l-2 border-slate-700">
//                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-cyan-500"></div>
//                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
//                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
//                      <span className="text-cyan-400 font-mono text-sm">{exp.company}</span>
//                      <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{exp.date}</span>
//                    </div>
//                    <p className="text-slate-400 text-sm mb-3">{exp.desc}</p>
//                    <div className="flex gap-2">
//                       {exp.tags.map((t, i) => <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{t}</span>)}
//                    </div>
//                  </div>
//                ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS --- */}
//       <section id="projects" className="py-20 bg-[#0F1422] relative">
//         <div className="container mx-auto px-6">
//           <SectionTitle 
//             title="Project Repository" 
//             subtitle="Explore my technical projects. Hover over a card to remove it from view if customized presentation is needed." 
//           />
          
//           {/* Controls */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            
//             {/* Filter Tabs */}
//             <div className="flex flex-wrap justify-center gap-2">
//               {categories.map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveFilter(cat)}
//                   className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
//                     activeFilter === cat 
//                       ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-600/20' 
//                       : 'bg-[#1e293b] text-slate-400 border-slate-700 hover:text-white hover:border-slate-500'
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Reset Button */}
//             {projects.length !== initialProjects.length && (
//               <button 
//                 onClick={handleResetProjects}
//                 className="flex items-center gap-2 text-xs text-cyan-400 hover:text-white transition-colors"
//               >
//                 <RefreshCw size={14} /> Restore Hidden Projects
//               </button>
//             )}
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProjects.map((project) => (
//               <ProjectCard key={project.id} project={project} onRemove={handleRemoveProject} />
//             ))}
//           </div>

//           {filteredProjects.length === 0 && (
//              <div className="text-center py-20">
//                <p className="text-slate-500">No projects found in this category.</p>
//                <button onClick={() => setActiveFilter('All')} className="text-cyan-400 mt-2 hover:underline">View All</button>
//              </div>
//           )}

//         </div>
//       </section>

//       {/* --- SKILLS & AWARDS --- */}
//       <section id="achievements" className="py-20 bg-[#0B0F19] border-t border-slate-800">
//         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
           
//            <div>
//              <h3 className="text-3xl font-bold text-white mb-8">Achievements</h3>
//              <div className="grid gap-4">
//                {achievements.map((item, idx) => (
//                  <div key={idx} className="flex items-center gap-4 bg-[#111827] border border-slate-800 p-5 rounded-xl hover:border-cyan-500/40 transition-colors group">
//                    <div className="p-3 bg-[#1e293b] rounded-lg text-cyan-500 group-hover:text-white group-hover:bg-cyan-600 transition-colors">
//                      <item.icon size={24} />
//                    </div>
//                    <div>
//                      <h4 className="text-white font-bold">{item.title}</h4>
//                      <p className="text-slate-400 text-sm">{item.event}</p>
//                    </div>
//                  </div>
//                ))}
//              </div>
//            </div>

//            <div id="skills">
//              <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
//              <div className="bg-[#111827] border border-slate-800 rounded-xl p-8">
//                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
//                  <div>
//                     <h4 className="text-slate-500 text-xs uppercase font-bold mb-4 tracking-wider">Languages</h4>
//                     <ul className="space-y-2 text-slate-300 font-medium">
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Python</li>
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> C++</li>
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> JavaScript (ES6+)</li>
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> Solidity</li>
//                     </ul>
//                  </div>
//                  <div>
//                     <h4 className="text-slate-500 text-xs uppercase font-bold mb-4 tracking-wider">Frameworks</h4>
//                     <ul className="space-y-2 text-slate-300 font-medium">
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> TensorFlow / Keras</li>
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div> React.js</li>
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Node.js</li>
//                       <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Streamlit</li>
//                     </ul>
//                  </div>
//                  <div className="col-span-2 border-t border-slate-700/50 pt-6">
//                     <h4 className="text-slate-500 text-xs uppercase font-bold mb-4 tracking-wider">Tools & Platforms</h4>
//                     <div className="flex flex-wrap gap-2">
//                        {['Azure', 'LangFlow', 'n8n', 'Docker', 'Git/GitHub', 'Hugging Face', 'Jupyter', 'Postman'].map(t => (
//                          <span key={t} className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">{t}</span>
//                        ))}
//                     </div>
//                  </div>
//                </div>
//              </div>
//            </div>

//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="bg-[#05080f] py-12 border-t border-slate-900">
//         <div className="container mx-auto px-6 text-center">
//           <p className="text-slate-500 mb-6">Built with React & Tailwind CSS.</p>
//           <div className="flex justify-center gap-8 mb-8">
//             <a href={editableInfo.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
//             <a href={editableInfo.github} className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
//             <a href={`mailto:${editableInfo.email}`} className="text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
//           </div>
//           <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Achyut Pancholi. All rights reserved.</p>
//         </div>
//       </footer>

//     </div>


import React, { useState, useRef, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Brain, 
  Cpu, 
  Globe, 
  Database,
  Terminal, 
  Menu, 
  X, 
  Upload,
  Trophy,
  Trash2,
  Calendar,
  MapPin,
  RefreshCw,
  Phone,
  FileText
} from 'lucide-react';

// IMPORT YOUR LOCAL IMAGE HERE
// Make sure profile.png is in the same folder as this file (src/)
// If it is in src/assets/, change to './assets/profile.png'


// --- DATA ---

const initialPersonalInfo = {
  name: "Achyut Pancholi",
  title: "AI & Machine Learning Engineer | Full Stack Developer",
  tagline: "Bridging the gap between theoretical AI models and real-world applications.",
  email: "achyutpancholi21@gmail.com",
  phone: "+91-6375872850",
  location: "Bhilwara, Rajasthan, India",
  github: "https://github.com/Achyut-Pancholi",
  linkedin: "https://www.linkedin.com/in/achyut-pancholi-b6700b265",
  about: "I am a Computer Science undergraduate specializing in Artificial Intelligence. My work ranges from building autonomous agents (LangFlow/n8n) to deploying scalable ML models on Azure. I am also proficient in Full Stack Web Development and Blockchain, allowing me to build complete, end-to-end systems."
};

const experience = [
  {
    role: "AIML Engineer Intern",
    company: "Xebia",
    date: "Jun 2025 - Jul 2025",
    desc: "Built Salary Predictor & Disease Detection models. Deployed Streamlit apps on Azure. Mastered CNNs & EDA.",
    tags: ["Azure", "ML", "Streamlit"]
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "LaunchED",
    date: "Feb 2025 - Apr 2025",
    desc: "Focus on GenAI & Prompt Engineering. Created multi-modal tools utilizing NLP and React integration.",
    tags: ["GenAI", "NLP", "React"]
  }
];

const achievements = [
  { title: "Runner-up: Smart Library System (IoT)", event: "CVMU Hackathon 2024", icon: Cpu },
  { title: "Runner-up: Ideathon 2025", event: "FIU USA", icon: Globe },
  { title: "Participant: Blockchain Verification", event: "Smart India Hackathon 2024", icon: Database },
  { title: "Academic Excellence (CGPA: 8.1)", event: "Sir Padampat Singhania University", icon: Trophy }
];

// Complete Project List from GitHub + Resume
const initialProjects = [
  {
    id: 1,
    title: "Flowbit: AI Orchestration",
    category: "AI Agents",
    description: "Autonomous system using LangFlow & n8n to parse emails, classify attachments (JSON/PDF), and trigger workflows via Gmail API.",
    tech: ["LangFlow", "n8n", "Python", "Gmail API"],
    link: "https://github.com/Achyut-Pancholi",
    featured: true
  },
  {
    id: 2,
    title: "RL Smart Timetable",
    category: "AI & ML",
    description: "Reinforcement Learning system that generates conflict-free, optimized class schedules based on constraints and preferences.",
    tech: ["Reinforcement Learning", "Python", "Optimization"],
    link: "https://github.com/Achyut-Pancholi/RL-Powered-Smart-Timetable-Generator",
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Disaster Detection",
    category: "AI & ML",
    description: "Computer vision system detecting disasters (fire, flood) in real-time video streams to aid emergency response.",
    tech: ["Computer Vision", "Deep Learning", "OpenCV"],
    link: "https://github.com/Achyut-Pancholi/Real-Time-Disaster-Detection",
    featured: true
  },
  {
    id: 4,
    title: "Blockchain Doc Verification",
    category: "Blockchain",
    description: "Tamper-proof document verification using Solidity smart contracts, IPFS storage, and AI-OCR for data extraction.",
    tech: ["Solidity", "Ether.js", "IPFS", "React", "OCR"],
    link: "https://github.com/Achyut-Pancholi/Document-Verification-Blockchain",
    featured: true
  },
  {
    id: 5,
    title: "PathGenie Ecosystem",
    category: "AI & ML",
    description: "AI-driven career path recommendation engine. Uses ML clustering to map optimal learning trajectories for users.",
    tech: ["Streamlit", "Scikit-learn", "Pandas"],
    link: "https://github.com/Achyut-Pancholi/PathGenie_App",
    featured: false
  },
  {
    id: 6,
    title: "AI Excuse Generator",
    category: "Generative AI",
    description: "Multi-modal GenAI tool creating personalized excuses with fake audio and document 'proof'.",
    tech: ["NLP", "Hugging Face", "React", "Audio Synthesis"],
    link: "https://github.com/Achyut-Pancholi/AI-Excuse-Generator",
    featured: false
  },
  {
    id: 7,
    title: "Lung Cancer Predictor",
    category: "AI & ML",
    description: "Predictive model diagnosing lung cancer risk from medical features using classification algorithms.",
    tech: ["Machine Learning", "Jupyter", "Healthcare AI"],
    link: "https://github.com/Achyut-Pancholi/Lung_Cancer-Predictor",
    featured: false
  },
  {
    id: 8,
    title: "Prompt Engineering App",
    category: "Generative AI",
    description: "Utility tool for crafting, testing, and optimizing prompts for Large Language Models (LLMs).",
    tech: ["LLMs", "Python", "Prompt Eng."],
    link: "https://github.com/Achyut-Pancholi/Prompt_Enginnerig_APP",
    featured: false
  },
  {
    id: 9,
    title: "Campus Event Manager",
    category: "Full Stack",
    description: "Role-based platform for university event organization, scheduling, and student registrations.",
    tech: ["React", "Node.js", "SQL", "Express"],
    link: "https://github.com/Achyut-Pancholi/Campus-Event-Management",
    featured: false
  },
  {
    id: 10,
    title: "Smart Library System",
    category: "IoT",
    description: "IoT-enabled book tracking system using sensors. Runner-up at CVMU Hackathon.",
    tech: ["IoT", "C++", "Sensors", "Cloud"],
    link: "https://github.com/Achyut-Pancholi",
    featured: false
  },
  {
    id: 11,
    title: "Aerofit EDA App",
    category: "Data Science",
    description: "Exploratory Data Analysis dashboard for fitness product data, providing visual insights and summaries.",
    tech: ["Python", "Pandas", "Seaborn", "Streamlit"],
    link: "https://github.com/Achyut-Pancholi/aerofit_eda_app",
    featured: false
  },
  {
    id: 12,
    title: "Diabetes Predictor",
    category: "AI & ML",
    description: "Healthcare ML model predicting diabetes likelihood based on diagnostic measurements.",
    tech: ["Scikit-learn", "Python", "Classification"],
    link: "https://github.com/Achyut-Pancholi/Diabetese_Predictor",
    featured: false
  },
  {
    id: 13,
    title: "Movie Sentiment Analysis",
    category: "NLP",
    description: "NLP pipeline performing sentiment classification on movie reviews using vectorization and ML models.",
    tech: ["NLP", "NLTK", "Text Processing"],
    link: "https://github.com/Achyut-Pancholi/Movie-Review-Sentiment-Analysis",
    featured: false
  },
  {
    id: 14,
    title: "Titanic Survival",
    category: "Data Science",
    description: "Classic ML classification project predicting passenger survival rates with extensive feature engineering.",
    tech: ["Data Science", "Kaggle", "Python"],
    link: "https://github.com/Achyut-Pancholi/titanic_survival_prediction",
    featured: false
  },
  {
    id: 15,
    title: "Customer Clustering",
    category: "Data Science",
    description: "Unsupervised learning project using K-Means to segment customers for targeted marketing strategies.",
    tech: ["Clustering", "K-Means", "Analytics"],
    link: "https://github.com/Achyut-Pancholi/customerclusterprediction",
    featured: false
  },
  {
    id: 16,
    title: "Salary Predictor",
    category: "AI & ML",
    description: "Regression model estimating salaries based on years of experience, education, and location.",
    tech: ["Regression", "Python", "Data Analysis"],
    link: "https://github.com/Achyut-Pancholi/Salary-Predictor",
    featured: false
  },
  {
    id: 17,
    title: "Quiz Form Filler",
    category: "Automation",
    description: "JavaScript automation script designed to auto-populate form fields and quizzes for testing purposes.",
    tech: ["JavaScript", "DOM Manipulation", "Automation"],
    link: "https://github.com/Achyut-Pancholi/Quiz_form_filler",
    featured: false
  },
  {
    id: 18,
    title: "Temperature Prediction",
    category: "AI & ML",
    description: "Time-series forecasting project to predict future temperature trends based on historical weather data.",
    tech: ["Time Series", "Python", "Forecasting"],
    link: "https://github.com/Achyut-Pancholi/temprature_prediction",
    featured: false
  }
];

// --- COMPONENTS ---

const NavLink = ({ href, children, mobile, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`${mobile ? 'block py-3 text-lg border-b border-slate-800' : 'text-sm font-medium'} text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider`}
  >
    {children}
  </a>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
      {title}<span className="text-cyan-500">.</span>
    </h2>
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full mx-auto mt-4"></div>
  </div>
);

const ProjectCard = ({ project, onRemove }) => (
  <div className="group relative bg-slate-800/40 border border-slate-700/60 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full backdrop-blur-sm">
    
    {/* Remove Button (Visible on Hover) */}
    <button 
      onClick={(e) => { e.stopPropagation(); onRemove(project.id); }}
      className="absolute top-2 right-2 z-20 p-2 bg-red-500/10 text-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
      title="Remove from portfolio view"
    >
      <Trash2 size={16} />
    </button>

    <div className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${
          project.category.includes('AI') ? 'bg-violet-500/10 text-violet-300 border-violet-500/20' :
          project.category.includes('Web') || project.category.includes('Full') ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' :
          'bg-slate-700/30 text-slate-300 border-slate-600'
        }`}>
          {project.category}
        </span>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
          <Github size={20} />
        </a>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[10px] font-mono text-slate-300 bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const UploadAvatar = ({ image, onUpload }) => {
  const fileInputRef = useRef(null);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     onUpload(imageUrl);
  //   }
  // };

  return (
    <div className="relative group w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0 mb-8 md:mb-0 flex-shrink-0 cursor-pointer" onClick={() => fileInputRef.current.click()}>
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-cyan-500 transition-all duration-300 shadow-2xl bg-slate-900 flex items-center justify-center relative z-10">
        {image ? (
          <img src={image} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <div className="text-center p-4">
             <Upload className="mx-auto text-slate-600 mb-2 group-hover:text-cyan-400 transition-colors" size={32} />
             <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest block">Upload Photo</span>
          </div>
        )}
      </div>
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" /> */}
    </div>
  );
};

export default function Portfolio() {
  const [editableInfo, setEditableInfo] = useState(initialPersonalInfo);
  //const [isEditing, setIsEditing] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  
  // Use local imported image first, fall back to null if not present
  const [profileImage, setProfileImage] = useState(profilePic);
  
  // NEW: State for AI Summary
  const [aiSummary, setAiSummary] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRemoveProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const handleResetProjects = () => {
    setProjects(initialProjects);
  };
  
  const handleInfoChange = (field, value) => {
    setEditableInfo(prev => ({ ...prev, [field]: value }));
  };

  const generateAISummary = async () => {
    setLoadingAI(true);
    const apiKey = ""; // Leave empty, uses runtime env
    const prompt = `Generate a professional summary for a portfolio for Achyut Pancholi, an AI/ML Engineer.
    Highlights:
    - Focus: AI Agent Orchestration, Generative AI, Full Stack.
    - Tools: LangFlow, n8n, Streamlit, Azure.
    - Key Projects: Flowbit (Agent Orchestration), Blockchain Doc Verification.
    - Internships: Xebia (AIML), LaunchED (GenAI).
    Output: A concise, impactful paragraph (approx 150 words) emphasizing quantifiable results and technical depth.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      setAiSummary(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("AI Generation failed:", error);
      setAiSummary("Failed to generate summary. Please try again.");
    }
    setLoadingAI(false);
  };

  const categories = ['All', 'AI Agents', 'AI & ML', 'Generative AI', 'Full Stack', 'IoT', 'Blockchain', 'Data Science'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-lg border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
            <Terminal size={24} className="text-cyan-500" />
            Achyut<span className="text-slate-600">.dev</span>
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects ({projects.length})</NavLink>
            <NavLink href="#achievements">Awards</NavLink>
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-5 py-2 bg-cyan-500 text-slate-900 hover:bg-cyan-400 hover:text-white rounded-full transition-all text-sm font-bold shadow-lg shadow-cyan-500/50"
            >
              Hire Me
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0F19] border-b border-slate-800 p-6 flex flex-col gap-2 shadow-2xl z-50">
            <NavLink href="#about" mobile onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink href="#projects" mobile onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#skills" mobile onClick={() => setMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#achievements" mobile onClick={() => setMenuOpen(false)}>Achievements</NavLink>
            <button 
              onClick={() => { setShowContactModal(true); setMenuOpen(false); }}
              className="mt-4 w-full py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg"
            >
              Hire Me
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-800/50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
        {/* Edit Button */}
        

        {/* Abstract Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-bold mb-8 uppercase tracking-wider">
                 <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                 Available for immediate joining
               </div>
               
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                 Hello, I'm <br />
                 {editableInfo.name}
               </h1>
               
               <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-8 max-w-2xl">
                 {editableInfo.title}
               </h2>
               
               <p className="text-slate-500 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed text-lg">
                 {  editableInfo.tagline}
               </p>
               
               <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 <a href="#projects" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 hover:translate-y-[-2px] flex items-center gap-2">
                   <Code2 size={20} /> Browse Portfolio
                 </a>
                 <a href={editableInfo.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#1e293b] hover:bg-[#334155] text-white font-bold rounded-lg transition-all border border-slate-700 flex items-center gap-2">
                   <Github size={20} /> GitHub Profile
                 </a>
               </div>
            </div>

            <div className="md:w-auto flex flex-col items-center order-1 md:order-2">
               <UploadAvatar image={profileImage} onUpload={setProfileImage} />
            </div>

          </div>
        </div>
      </header>

      {/* --- AI SUMMARY SECTION --- */}
      <section className="py-12 bg-[#0B0F19] border-b border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <button 
            onClick={generateAISummary}
            disabled={loadingAI}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-violet-500/30 transition-all disabled:opacity-50"
          >
            {loadingAI ? <RefreshCw className="animate-spin" size={18}/> : <Brain size={18}/>}
            {loadingAI ? "Generating AI Profile..." : "Generate AI Summary"}
          </button>

          {aiSummary && (
            <div className="mt-8 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl max-w-3xl mx-auto relative animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="absolute -top-3 -left-3">
                 <div className="w-6 h-6 bg-cyan-500 rounded-full blur-lg"></div>
               </div>
               <h3 className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3 flex justify-center items-center gap-2">
                 <Terminal size={14}/> Gemini 2.5 Analysis
               </h3>
               <p className="text-slate-300 leading-relaxed text-lg italic">
                 "{aiSummary}"
               </p>
            </div>
          )}
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-20 bg-[#0B0F19]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <Brain className="text-violet-500" /> About Me
            </h3>
            
            
                <p className="text-slate-400 leading-relaxed text-lg">
                    {editableInfo.about}
                </p>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
               <div className="flex items-center gap-3 text-slate-400">
                 <MapPin className="text-cyan-500" size={18} /> 
                 {
                    editableInfo.location
                 }
               </div>
               <div className="flex items-center gap-3 text-slate-400">
                 <Mail className="text-cyan-500" size={18} /> 
                 {
                    editableInfo.email
                 }
               </div>
            </div>
          </div>

          <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-8">
               {experience.map((exp, idx) => (
                 <div key={idx} className="relative pl-6 border-l-2 border-slate-700">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-cyan-500"></div>
                   <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                   <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                     <span className="text-cyan-400 font-mono text-sm">{exp.company}</span>
                     <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{exp.date}</span>
                   </div>
                   <p className="text-slate-400 text-sm mb-3">{exp.desc}</p>
                   <div className="flex gap-2">
                      {exp.tags.map((t, i) => <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{t}</span>)}
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-20 bg-[#0F1422] relative">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Project Repository" 
            subtitle="Explore my technical projects. Hover over a card to remove it from view if customized presentation is needed." 
          />
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    activeFilter === cat 
                      ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-600/20' 
                      : 'bg-[#1e293b] text-slate-400 border-slate-700 hover:text-white hover:border-slate-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reset Button */}
            {projects.length !== initialProjects.length && (
              <button 
                onClick={handleResetProjects}
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-white transition-colors"
              >
                <RefreshCw size={14} /> Restore Hidden Projects
              </button>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onRemove={handleRemoveProject} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
             <div className="text-center py-20">
               <p className="text-slate-500">No projects found in this category.</p>
               <button onClick={() => setActiveFilter('All')} className="text-cyan-400 mt-2 hover:underline">View All</button>
             </div>
          )}

        </div>
      </section>

      {/* --- SKILLS & AWARDS --- */}
      <section id="achievements" className="py-20 bg-[#0B0F19] border-t border-slate-800">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
           
           <div>
             <h3 className="text-3xl font-bold text-white mb-8">Achievements</h3>
             <div className="grid gap-4">
               {achievements.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-[#111827] border border-slate-800 p-5 rounded-xl hover:border-cyan-500/40 transition-colors group">
                   <div className="p-3 bg-[#1e293b] rounded-lg text-cyan-500 group-hover:text-white group-hover:bg-cyan-600 transition-colors">
                     <item.icon size={24} />
                   </div>
                   <div>
                     <h4 className="text-white font-bold">{item.title}</h4>
                     <p className="text-slate-400 text-sm">{item.event}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div id="skills">
             <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
             <div className="bg-[#111827] border border-slate-800 rounded-xl p-8">
               <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                 <div>
                    <h4 className="text-slate-500 text-xs uppercase font-bold mb-4 tracking-wider">Languages</h4>
                    <ul className="space-y-2 text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Python</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> C++</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> JavaScript (ES6+)</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> Solidity</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-slate-500 text-xs uppercase font-bold mb-4 tracking-wider">Frameworks</h4>
                    <ul className="space-y-2 text-slate-300 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> TensorFlow / Keras</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div> React.js</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Node.js</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Streamlit</li>
                    </ul>
                 </div>
                 <div className="col-span-2 border-t border-slate-700/50 pt-6">
                    <h4 className="text-slate-500 text-xs uppercase font-bold mb-4 tracking-wider">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                       {['Azure', 'LangFlow', 'n8n', 'Docker', 'Git/GitHub', 'Hugging Face', 'Jupyter', 'Postman'].map(t => (
                         <span key={t} className="px-3 py-1 bg-slate-800 rounded text-sm text-slate-300">{t}</span>
                       ))}
                    </div>
                 </div>
               </div>
             </div>
           </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#05080f] py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 mb-6">Built with React & Tailwind CSS.</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href={editableInfo.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href={editableInfo.github} className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
            <a href={`mailto:${editableInfo.email}`} className="text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Achyut Pancholi. All rights reserved.</p>
        </div>
      </footer>

      {/* --- CONTACT MODAL --- */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
           <div className="bg-[#0B0F19] border border-slate-700 rounded-2xl w-full max-w-md p-6 relative shadow-2xl shadow-cyan-500/10">
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
              <p className="text-slate-400 text-sm mb-6">Open for internships and full-time opportunities.</p>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    <div className="p-2 bg-green-500/10 text-green-400 rounded-lg">
                       <Phone size={20} />
                    </div>
                    <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Phone</p>
                       <p className="text-white font-mono">{editableInfo.phone}</p>
                    </div>
                 </div>

                 <a href={`mailto:${editableInfo.email}`} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group">
                    <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                       <Mail size={20} />
                    </div>
                    <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Email</p>
                       <p className="text-white group-hover:text-cyan-400 transition-colors">{editableInfo.email}</p>
                    </div>
                 </a>

                 <a href={editableInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                       <Linkedin size={20} />
                    </div>
                    <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">LinkedIn</p>
                       <p className="text-white group-hover:text-blue-400 transition-colors">Connect on LinkedIn</p>
                    </div>
                 </a>

                 {/* UPDATED RESUME SECTION */}
                 <a 
                   href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}

                   target="_blank" 
                   rel="noopener noreferrer" 
                   download="Achyut_Pancholi_Resume.pdf"
                   className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
                 >
                    <div className="p-2 bg-violet-500/10 text-violet-400 rounded-lg">
                       <FileText size={20} />
                    </div>
                    <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Resume</p>
                       <p className="text-white group-hover:text-violet-400 transition-colors">Download PDF</p>
                    </div>
                 </a>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}
