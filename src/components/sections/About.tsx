import { Code, Brain, Sparkles, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Building intelligent systems with deep learning and NLP",
      gradient: "from-lavender/20 to-primary/10",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Creating web applications from frontend to backend",
      gradient: "from-mint/20 to-secondary/10",
    },
    {
      icon: Sparkles,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
      gradient: "from-rose/20 to-accent/10",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lavender/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Photo and Stats */}
            <div className="relative">
              <div className="relative">
                {/* Main photo */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-6 opacity-20" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50 shadow-hover">
                    <img 
                      src={profilePhoto} 
                      alt="Kavyasri V J" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 sm:right-8 lg:right-0 glass-strong px-4 py-3 rounded-2xl shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">8.24 CGPA</p>
                      <p className="text-xs text-muted-foreground">SSN College</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Me
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Turning Ideas into{" "}
                <span className="text-gradient">Reality</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a B.Tech Information Technology student at SSN College of Engineering 
                with a deep passion for Artificial Intelligence and Machine Learning. 
                My journey in tech is driven by curiosity and a hands-on approach to learning. 
                I thrive on building practical, real-world systems that solve meaningful problems.
              </p>

              {/* Highlight cards */}
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r ${item.gradient} border border-border/30 hover:shadow-soft transition-all duration-300`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
