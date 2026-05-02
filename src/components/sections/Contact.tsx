import { Mail, Linkedin, Send, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-lavender/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-mint/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new opportunities, projects, or just having a chat about tech
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50">
              <h3 className="text-xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:kavyasrivj271@gmail.com"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-lavender/10 border border-border/30 hover:shadow-soft transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold">kavyasrivj271@gmail.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kavyasri-v-j-0a8837247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-sky/10 to-mint/10 border border-border/30 hover:shadow-soft transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky to-mint flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                    <Linkedin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="font-semibold">Kavyasri V J</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50">
            <h3 className="text-xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" variant="hero" className="w-full" size="lg">
                <Send className="h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}