import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "ZAdroit IT Solutions",
    location: "Salem, TN",
    period: "May 2025 – Jun 2025",
    description: [
      "Developed a speech-to-text application end-to-end — from requirement gathering, backend integration, to a functional UI — focusing on accuracy and clean user experience.",
      "Built a medical report summarizer for a radiology scan center using NLP-based text processing; collaborated with client stakeholders to understand requirements and deliver production-ready output.",
      "Wrote clean, maintainable code in Python, performed debugging, and participated in iterative testing cycles to meet quality standards before deployment.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-mint/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world experience building AI-powered solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50 hover:shadow-hover transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary rounded-t-3xl" />
              
              <div className="flex flex-wrap items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                  <Briefcase className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-xl text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-xl text-sm">
                  <Calendar className="h-4 w-4 text-accent" />
                  {exp.period}
                </span>
              </div>

              <div className="space-y-4">
                {exp.description.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}