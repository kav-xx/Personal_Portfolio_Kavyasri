import { Cpu, Droplets, Baby, Users, ArrowUpRight, Brain } from "lucide-react";

const projects = [
  {
    title: "Infant Cry Vocalisation Classifier",
    period: "Aug 2025 – Mar 2026",
    description:
      "Designed a multi-architecture deep learning system (LSTM, CNN, BiLSTM) achieving ~80% classification accuracy. Built a robust data preprocessing and feature extraction pipeline with clean, reproducible code.",
    technologies: ["Python", "TensorFlow (Keras)", "Librosa", "LSTM", "CNN-BiLSTM", "STFT", "Streamlit"],
    icon: Baby,
    gradient: "from-lavender to-primary",
    bgGradient: "from-lavender/10 to-primary/10",
  },
  {
    title: "Sleep Posture Classification – Quantum-Classical Neural Network",
    period: "Jan 2025 – Apr 2025",
    description:
      "Developed a hybrid Quantum-Classical model with 80% accuracy using PennyLane and PyTorch. Structured codebase for maintainability and wrote systematic test cases across all posture categories.",
    technologies: ["Python", "PyTorch", "PennyLane", "Scikit-learn", "UMAP", "SMOTE", "QCNN"],
    icon: Brain,
    gradient: "from-primary to-lavender",
    bgGradient: "from-primary/10 to-lavender/10",
  },
  {
    title: "Flood Detection System",
    period: "Jul 2024 – Nov 2024",
    description:
      "Built an end-to-end ML pipeline for real-time classification of satellite imagery using CNN. Designed a scalable backend with modular, maintainable code and robust testing across diverse data inputs.",
    technologies: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "HTML", "CSS", "JavaScript", "Git"],
    icon: Droplets,
    gradient: "from-sky to-mint",
    bgGradient: "from-sky/10 to-mint/10",
  },
  {
    title: "Faculty Activities Management System",
    period: "Jan 2024 – May 2024",
    description:
      "Developed a full-stack centralized web application to track, manage, and generate reports on faculty participation in academic events with a PostgreSQL backend and REST API.",
    technologies: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "JavaScript", "REST APIs", "Git"],
    icon: Users,
    gradient: "from-accent to-rose",
    bgGradient: "from-accent/10 to-rose/10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-1/2 h-1/2 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-mint/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing my expertise in AI, ML, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-7 w-7 text-primary-foreground" />
                </div>

                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors flex items-start gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </h3>

                <p className="text-xs text-muted-foreground mb-3 font-medium">{project.period}</p>

                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-muted/50 text-xs font-medium text-muted-foreground border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}