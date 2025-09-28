import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  type?: "hard" | "soft";
}

export default function SkillBadge({ skill, type = "hard" }: SkillBadgeProps) {
  return (
    <span className={cn(
      "inline-block px-3 py-1.5 text-xs font-medium rounded-full border transition-smooth hover:scale-105 hover:shadow-soft",
      type === "hard" 
        ? "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20" 
        : "bg-secondary/30 text-secondary-foreground border-secondary/50 hover:bg-secondary/50"
    )}>
      {skill}
    </span>
  );
}