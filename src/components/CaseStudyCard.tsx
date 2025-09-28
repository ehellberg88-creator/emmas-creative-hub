import { ArrowRight, Gamepad2, Lightbulb } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  intro: string;
  link: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('game')) {
      return <Gamepad2 className="w-6 h-6 text-primary" />;
    }
    return <Lightbulb className="w-6 h-6 text-primary" />;
  };

  return (
    <article className="group bg-card-gradient p-6 rounded-2xl shadow-soft hover:shadow-elegant border border-border/50 hover:border-primary/30 transition-smooth hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-accent rounded-lg group-hover:bg-primary/10 transition-smooth">
          {getIcon(caseStudy.title)}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
            {caseStudy.title}
          </h4>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {caseStudy.intro}
          </p>
          <a 
            href={caseStudy.link} 
            className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-smooth"
          >
            Läs mer 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
          </a>
        </div>
      </div>
    </article>
  );
}