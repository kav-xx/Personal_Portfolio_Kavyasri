import { Code, Database, Layers, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Core Java", "Core C", "SQL"],
    gradient: "from-primary/20 to-lavender/20",
    iconBg: "bg-gradient-to-br from-primary to-lavender",
  },
  {
    icon: Layers,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "PostgreSQL", "PySpark", "REST APIs", "Streamlit"],
    gradient: "from-mint/20 to-secondary/20",
    iconBg: "bg-gradient-to-br from-mint to-secondary",
  },
  {
    icon: Database,
    title: "Languages & Frameworks",
    skills: ["HTML", "CSS", "JavaScript", "Flask", "React.js"],
    gradient: "from-sky/20 to-primary/20",
    iconBg: "bg-gradient-to-br from-sky to-primary",
  },
  {
    icon: Cpu,
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Image Processing", "NLP", "Generative AI", "LLM", "Prompt Engineering"],
    gradient: "from-accent/20 to-rose/20",
    iconBg: "bg-gradient-to-br from-accent to-rose",
  },
  {
    icon: Database,
    title: "Data Analytics",
    skills: ["Data Analysis", "Feature Engineering", "Model Evaluation", "Data Visualization"],
    gradient: "from-lavender/20 to-mint/20",
    iconBg: "bg-gradient-to-br from-lavender to-mint",
  },
  {
    icon: Layers,
    title: "Cloud",
    skills: ["AWS Fundamentals"],
    gradient: "from-peach/20 to-accent/20",
    iconBg: "bg-gradient-to-br from-peach to-accent",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A diverse skill set spanning AI, development, and modern frameworks
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group p-6 sm:p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50 hover:shadow-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${category.iconBg} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-xl bg-gradient-to-r ${category.gradient} text-sm font-medium text-foreground border border-border/30 hover:scale-105 transition-transform cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}