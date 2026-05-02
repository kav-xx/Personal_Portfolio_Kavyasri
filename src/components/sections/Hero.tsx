import { ArrowDown, Mail, FolderOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-lavender/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 left-[10%] w-96 h-96 bg-mint/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rose/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
        
        {/* Decorative dots */}
        <div className="absolute top-32 left-[20%] w-2 h-2 bg-primary rounded-full opacity-60" />
        <div className="absolute top-48 right-[25%] w-3 h-3 bg-accent rounded-full opacity-50" />
        <div className="absolute bottom-48 left-[30%] w-2 h-2 bg-mint rounded-full opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="opacity-0 animate-fade-up mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-card shadow-glow mx-auto">
                <img 
                  src={profilePhoto} 
                  alt="Kavyasri V J" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground text-sm">👋</span>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-fade-up stagger-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-medium mb-6 shadow-card">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for Opportunities
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up stagger-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Kavyasri V J</span>
          </h1>

          <p className="opacity-0 animate-fade-up stagger-3 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            B.Tech Information Technology Student
          </p>

          <p className="opacity-0 animate-fade-up stagger-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about Python, full-stack development, and AI/ML engineering. Built machine learning and NLP-based applications, including medical text summarization and posture classification systems.
          </p>

          <div className="opacity-0 animate-fade-up stagger-5 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <FolderOpen className="h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="gap-2 hover:bg-card/80" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-6">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm font-medium">Scroll down</span>
          <div className="w-6 h-10 rounded-full border-2 border-current p-1">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mx-auto" />
          </div>
        </a>
      </div>
    </section>
  );
}