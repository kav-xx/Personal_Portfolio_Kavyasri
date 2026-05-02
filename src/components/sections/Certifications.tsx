import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    gradient: "from-primary/20 to-lavender/20",
    border: "border-primary/30",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    gradient: "from-mint/20 to-secondary/20",
    border: "border-mint/30",
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    gradient: "from-sky/20 to-mint/20",
    border: "border-sky/30",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    gradient: "from-accent/20 to-rose/20",
    border: "border-accent/30",
  },
  {
    title: "Complete Generative AI Course With Langchain and Huggingface",
    issuer: "Udemy",
    gradient: "from-lavender/20 to-primary/20",
    border: "border-lavender/30",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google",
    gradient: "from-peach/20 to-accent/20",
    border: "border-peach/30",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Credentials &amp; <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Continuously learning and validating skills through recognised platforms
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br ${cert.gradient} border ${cert.border} bg-card/80 backdrop-blur-sm shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-card shadow-card flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug mb-1">{cert.title}</p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
