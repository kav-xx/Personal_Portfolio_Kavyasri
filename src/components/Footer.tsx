import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-gradient">Kavyasri V J</span>
            <p className="text-sm text-muted-foreground">IT Student & AI Enthusiast</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:kavyasrivj271@gmail.com" className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/kavyasri-v-j-0a8837247/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
