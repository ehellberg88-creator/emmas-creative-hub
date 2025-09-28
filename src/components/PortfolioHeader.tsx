import { PortfolioButton } from "./ui/portfolio-button";
import { Download, Briefcase, Mail } from "lucide-react";
import emmaProfile from "@/assets/emma-profile.jpg";

interface PortfolioHeaderProps {
  name: string;
  role: string;
  intro: string;
  shortCVLink: string;
}

export default function PortfolioHeader({ name, role, intro, shortCVLink }: PortfolioHeaderProps) {
  return (
    <header className="max-w-6xl mx-auto">
      <div className="bg-hero-gradient p-8 md:p-12 rounded-3xl shadow-elegant mb-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          <div className="relative group">
            <img 
              src={emmaProfile} 
              alt="Emma Hellberg - UX Designer" 
              className="w-40 h-40 rounded-full object-cover shadow-soft border-4 border-white/20 group-hover:scale-105 transition-smooth" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
          </div>
          
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{name}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 font-light">{role}</p>
            <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">{intro}</p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <PortfolioButton variant="outline" size="lg" asChild>
                <a href={shortCVLink} className="group">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Ladda ner CV
                </a>
              </PortfolioButton>
              
              <PortfolioButton variant="secondary" size="lg" asChild>
                <a href="#case-studies" className="group">
                  <Briefcase className="w-5 h-5 group-hover:rotate-12" />
                  Utforska case studies
                </a>
              </PortfolioButton>
              
              <PortfolioButton variant="outline" size="lg" asChild>
                <a href="#kontakt" className="group">
                  <Mail className="w-5 h-5 group-hover:scale-110" />
                  Kontakta mig
                </a>
              </PortfolioButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}