import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Sri Sivasubramaniya Nadar (SSN) College of Engineering",
    location: "Chennai, Tamil Nadu",
    period: "Oct 2022 – Mar 2026",
    score: "CGPA: 8.24 / 10",
    current: true,
    icon: GraduationCap,
    color: "from-primary/20 to-lavender/20",
    borderColor: "border-primary/30",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bethel Matriculation Higher Secondary School",
    location: "Chennai, Tamil Nadu",
    period: "Jul 2020 – May 2022",
    score: "Percentage: 96.83%",
    current: false,
    icon: Award,
    color: "from-accent/20 to-rose/20",
    borderColor: "border-accent/30",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-mint/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building a strong foundation in technology and computer science
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent hidden sm:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Timeline dot */}
                  <div className={`hidden sm:flex flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} items-center justify-center shadow-soft z-10`}>
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 p-6 sm:p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50 hover:shadow-hover hover:-translate-y-1 transition-all duration-300`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      {item.current && (
                        <span className="px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold shadow-soft">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-foreground font-semibold text-lg mb-4">
                      {item.institution}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
                        <MapPin className="h-4 w-4 text-primary" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
                        <Calendar className="h-4 w-4 text-accent" />
                        {item.period}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-lavender/10 border border-primary/20">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{item.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}